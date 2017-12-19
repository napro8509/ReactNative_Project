import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl
} from 'react-native';
import getListPhone from '../../WebServices/getListPhone';
const url = 'https://funnyshopjonah.000webhostapp.com/images/product/';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [],
      nameType: '',
      refreshing: false,
      page:1
    }
  }    

  componentDidMount() {
    const { params } = this.props.navigation.state;
    getListPhone(params.id, this.state.page)
      .then(arrPhone => {
        this.setState({ source: arrPhone, nameType: arrPhone[0].nameType });
      });
  }
  onRefresh = () => {
    const { params } = this.props.navigation.state;
    console.log('OnRefresh')
    getListPhone(params.id, this.state.page+1)
      .then(arrPhone => {
        this.setState({page: this.state.page+1 });
        this.setState({ source: this.state.source.concat(arrPhone) })
      })
      .catch(error=>console.log(error))
      ;
      this.setState({ refreshing: false });
      
    }
    render() {
      const { navigation, screenProps } = this.props;
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
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
                    <View style={{ flex: 1 }}>
                      <Image style={styles.itemImage}
                        resizeMode='stretch'
                        source={{ uri: `${url}${item.images[0]}` }}
                      />
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text>{item.id}</Text>
                      <Text>{item.name}</Text>
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
      backgroundColor: 'grey',
    },
    wrapper: {
      backgroundColor: 'white',
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
      height: 100,
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      marginHorizontal: 10,
      flexDirection: 'row'
    },
    itemImage: {
      marginTop: 10,
      height: 70,
      width: 70
    }
  })
