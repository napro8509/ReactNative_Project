import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
  Vibration
} from 'react-native';
import getListPhone from '../../WebServices/getListPhone';
import { Rating } from 'react-native-elements';
const url = 'https://funnyshopjonah.000webhostapp.com/images/product/';

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [],
      nameType: 'COLLECTION',
      refreshing: false,
      page: 1,
      new: 1
    }
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    getListPhone(params.id, this.state.page)
      .then(arrPhone => {
        this.setState({ source: arrPhone, nameType: arrPhone[0].nameType });
        if (arrPhone[0].nameType == undefined) {
          this.setState({ nameType: params.title });
        } else
          this.setState({ nameType: arrPhone[0].nameType });
      });
  }
  onRefresh = () => {
    const { params } = this.props.navigation.state;
    console.log('OnRefresh')
    getListPhone(params.id, this.state.page + 1)
      .then(arrPhone => {
        this.setState({ page: this.state.page + 1 });
        this.setState({ source: this.state.source.concat(arrPhone) })
      })
      .catch(error => console.log(error))
      ;
    this.setState({ refreshing: false });

  }
  render() {
    const { navigation, screenProps } = this.props;
    const onSale = (
      <View style={{ width: 50, backgroundColor: 'pink', marginRight: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
        <Text style={{ color: '#FFF' }}>On Sale</Text>
      </View>
    );
    const newPhone = (
      <View style={{ width: 50, backgroundColor: 'green', marginRight: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
        <Text style={{ color: '#FFF' }}>New</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
        <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{
                flex: 1,
              }}
              resizeMode='cover'
              source={{ uri: 'http://theiphonewalls.com/wp-content/uploads/2013/09/iOS-7-Glow.png' }}
            />
          </View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.imageBack}
                source={require('../../../images/back_orange.png')} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {this.state.nameType}
            </Text>
            <View style={{ width: 35 }} />
          </View>
          <FlatList
            data={this.state.source}
            renderItem={({ item }) =>

              <TouchableOpacity onPress={() => {
                navigation.navigate('ProductDetail', { id: item.id });
              }}>
                <View style={styles.itemContainer}>
                  <View style={{ flex: 2 }}>
                    <Image style={styles.itemImage}
                      resizeMode='stretch'
                      source={{ uri: `${url}${item.images[0]}` }}
                    />
                  </View>
                  <View style={{ flex: 3, }}>
                    <View style={{ flex: 1, justifyContent: 'center', paddingRight: 10 }}>
                      <Text style={{ textAlign: 'right', fontSize: 15, color: 'orange' }}>{item.name}</Text>
                      <Text style={{ color: 'gray', textAlign: 'right', fontFamily: 'Avenir', color: '#DFDFDF', textDecorationLine: 'line-through', textDecorationStyle: 'dashed' }}>{numberWithSpaces(item.priceless)}đ</Text>
                      <Text style={{ color: 'red', textAlign: 'right', fontSize: 15, fontWeight: '500' }}>{numberWithSpaces(item.price)}đ</Text>
                      <View style={{ alignItems: 'flex-end' }}>
                        <Rating
                          type="star"
                          fractions={1}
                          startingValue={item.rating}
                          readonly
                          imageSize={20}
                          onFinishRating={this.ratingCompleted}
                          style={{ marginRight: 0 }}
                        />
                      </View>
                      <View style={{ alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row' }}>
                          {item.saling ? onSale : null}
                          {item.newPhone ? newPhone : null}
                        </View>

                        <Image source={require('../../../images/freeShip.jpg')}
                          resizeMode='stretch'
                          style={{ height: 40, width: 180 }}
                        />

                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            }
            keyExtractor={(item, index) => item.id}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  header: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    marginHorizontal: 10
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: 'Avenir',
    color: 'orange',
    fontWeight: '100',
  },
  imageBack: {
    width: 30,
    height: 30
  },
  itemContainer: {
    backgroundColor: '#FFF',
    height: 150,
    borderRadius:10,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  itemImage: {
    marginTop: 10,
    height: 130,
    width: 130
  }
})
