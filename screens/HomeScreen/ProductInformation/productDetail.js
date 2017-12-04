import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SwipeableListView
} from 'react-native';
import getPhoneDetail from '../../WebServices/getPhoneDetail';
import Swiper from 'react-native-swiper';
import global from '../../../Global/global';
const { height } = Dimensions.get('window');
const url = 'https://funnyshopjonah.000webhostapp.com/images/product/';
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneDetail: {},
      images: []
    }
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log(params);
    getPhoneDetail(params.id)
      .then(phoneInformation => {
        this.setState({ phoneDetail: phoneInformation[0] });
        this.setState({ images: this.state.phoneDetail.images });
      })
  }
  addPhoneToCart(){
    console.log(this.state.phoneDetail);
    global.addPhoneToCart(this.state.phoneDetail);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.imageBack}
                source={require('../../../images/back_orange.png')} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {this.state.phoneDetail.name}
            </Text>
            <TouchableOpacity onPress={this.addPhoneToCart.bind(this)}>
              <View>
                <Image source={require('../../../images/addCart.png')}
                  style={{ width: 20, height: 20 }}
                >
                </Image>
              </View>
            </TouchableOpacity>
          </View>
          <Swiper style={styles.swiperContainer}>
            <Image style={styles.swiperImage}
              source={{ uri: `${url}${this.state.images[0]}` }}
            >
            </Image>
            <Image style={styles.swiperImage}
              source={{ uri: `${url}${this.state.images[1]}` }}
            >
            </Image>
            <Text>
              Xin chao
                </Text>
          </Swiper>
          <View style={styles.description}>
            <View style={styles.descriptionLeft}>
              <Text>Tên: {this.state.phoneDetail.name} </Text>
              <Text>Giá: {this.state.phoneDetail.price} </Text>
              <Text>Màn hình: {this.state.phoneDetail.screen} </Text>
              <Text>Độ phân giải: {this.state.phoneDetail.solution} </Text>
              <Text>Camera: {this.state.phoneDetail.camera} </Text>
              <Text>Ram: {this.state.phoneDetail.ram} </Text>
              <Text>Rom: {this.state.phoneDetail.rom} </Text>
            </View>
            <View style={styles.descriptionRight}>
            </View>
          </View>
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
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
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
  swiperContainer: {
    marginTop: 5,
    height: height / 3,
    marginHorizontal: 10
  },
  swiperImage: {
    height: height / 3,
    marginHorizontal: 10
  },
  imageBack: {
    width: 30,
    height: 30
  },
  description: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row'
  },
  descriptionLeft: {
    justifyContent: 'space-between',

  }
});