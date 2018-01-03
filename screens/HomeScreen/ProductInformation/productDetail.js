import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SwipeableListView,
  Vibration,
  ScrollView,
} from 'react-native';
import getPhoneDetail from '../../WebServices/getPhoneDetail';
import Swiper from 'react-native-swiper';
import global from '../../../Global/global';
import SwipeHiddenHeader from '../../../components/Collapse Header/hideHeader';
const { height } = Dimensions.get('window');
const url = 'https://funnyshopjonah.000webhostapp.com/images/product/';

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function saleCount(a, b) {
  return (a / b);
}
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneDetail: {},
      images: [],
      price: 0,
      priceless: 0
    }
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log(params);
    getPhoneDetail(params.id)
      .then(phoneInformation => {
        this.setState({ phoneDetail: phoneInformation[0] });
        this.setState({ images: this.state.phoneDetail.images });
        this.setState({ price: this.state.price });
        this.setState({ priceless: this.state.priceless });
      })
  }
  addPhoneToCart() {
    console.log(this.state.phoneDetail);
    global.addPhoneToCart(this.state.phoneDetail);
  }

  render() {
    const { navigation } = this.props;
    const price = this.state.phoneDetail.price;
    const priceless = this.state.phoneDetail.priceless;
    const swiper = (<Swiper style={styles.swiperContainer}
      showsButtons={true}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
        <Image style={styles.swiperImage}
          resizeMode='stretch'
          source={{ uri: `${url}${this.state.images[0]}` }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image style={styles.swiperImage}
          resizeMode='stretch'
          source={{ uri: `${url}${this.state.images[1]}` }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image style={styles.swiperImage}
          resizeMode='stretch'
          source={{ uri: `${url}${this.state.images[2]}` }} />
      </View>
    </Swiper>);
    const scrollView = (
      
      <View style={styles.description}>
        <View style={styles.brownLine}>
          <Text style={{ fontWeight: 'bold' }}>Cấu hình {this.state.phoneDetail.name} </Text>
        </View>

        <View style={styles.whiteLine}>
          <Text style={{ color: 'red', flex: 1, fontWeight: 'bold' }}>Giá:</Text>
          <Text style={{ color: 'red', flex: 1, color: 'red' }}>{numberWithSpaces(`${price}`)} </Text>
          <View style={{ flex: 1, height: 20, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'orange', marginRight: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ color: '#FFF' }}>
                  -{Math.round(100 - saleCount(price, priceless) * 100)}%
              </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.brownLine}>
          <Text style={{ color: 'blue', flex: 1, fontWeight: 'bold' }}>Màn hình:</Text>
          <Text style={{ color: 'blue', flex: 2, color: 'black' }}>{this.state.phoneDetail.screen} </Text>
        </View>

        <View style={styles.whiteLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Độ phân giải:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.solution} </Text>
        </View>

        <View style={styles.brownLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Camera:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.camera} </Text>
        </View>

        <View style={styles.whiteLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Ram:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.ram} GB </Text>
        </View>

        <View style={styles.brownLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Rom:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.rom} GB </Text>
        </View>

        <View style={styles.whiteLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Pin:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.pin} mah </Text>
        </View>

        <View style={styles.brownLine}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Vi xử lí:</Text>
          <Text style={{ flex: 2, color: 'black' }}>{this.state.phoneDetail.chip}  </Text>
        </View>

        <View >
          <Text style={{ paddingLeft: 7, paddingTop: 5, paddingRight: 10, fontWeight: 'bold' }}> Mô Tả Chi Tiết</Text>
          <Text style={{ paddingLeft: 10, paddingTop: 5, paddingRight: 10, color: 'black' }}>{this.state.phoneDetail.description}</Text>
        </View>
      </View>
    );
    const headerJSX = (<View style={styles.header}>
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
    </View>);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>

      {headerJSX}
      <SwipeHiddenHeader
        header={()=> 
          <View style={{height:height/3}}>
          {swiper}
        </View> 
    }
      >
        {scrollView}
      </SwipeHiddenHeader>
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
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  block: {
    margin: 15,
    backgroundColor: '#1ac964',
    height: 100,
    borderRadius: 5
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
  headerTitle:{
    color:'orange'
  },
  swiperContainer: {
    marginHorizontal: 0
  },
  swiperImage: {
    flex: 1,
    width: height / 2.7
  },
  imageBack: {
    width: 30,
    height: 30
  },
  description: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  whiteLine: {
    height: 30,
    paddingLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  brownLine: {
    backgroundColor: '#DFDFDF',
    height: 30,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});