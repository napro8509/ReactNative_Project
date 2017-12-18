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
  ScrollView
} from 'react-native';
import getPhoneDetail from '../../WebServices/getPhoneDetail';
import Swiper from 'react-native-swiper';
import global from '../../../Global/global';
const { height } = Dimensions.get('window');
const url = 'https://funnyshopjonah.000webhostapp.com/images/product/';

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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
        console.log('aaaaaaaaaaaaa');
        console.log(this.state.images);
      })
  }
  addPhoneToCart(){
    console.log(this.state.phoneDetail);
    global.addPhoneToCart(this.state.phoneDetail);
  }

  render() {
    const { navigation } = this.props;
    const a=this.state.phoneDetail.price;
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
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
            <Image style={styles.swiperImage}
            resizeMode='stretch'
            source={{uri:`${url}${this.state.images[0]}`}}/>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Image style={styles.swiperImage}
            resizeMode='stretch'
            source={{uri:`${url}${this.state.images[1]}`}}/>
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Image style={styles.swiperImage}
            resizeMode='stretch'
            source={{uri:`${url}${this.state.images[2]}`}}/>
              </View>
          </Swiper>
          <ScrollView>
          <View style={styles.description}>
              <View style={styles.brownLine}>
              <Text style={{fontWeight:'bold'}}>Cấu hình {this.state.phoneDetail.name} </Text>
              </View>

              <View style={styles.whiteLine}>
              <Text style={{color:'red',flex:1}}>Giá:</Text>
              <Text style={{color:'red',flex:1}}>{numberWithSpaces(`${a}`)} </Text>
              <View style={{flex:1,height:20,flexDirection:'row'}}>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'orange',marginRight:5,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{color:'#FFF'}}>
                  -20%
                  </Text>
                  </View>
                </View>
              </View>
              </View>

              <View style={styles.brownLine}> 
              <Text style={{color:'blue',flex:1}}>Màn hình:</Text>
              <Text style={{color:'blue',flex:2}}>{this.state.phoneDetail.screen} </Text>
              </View>

              <View style={styles.whiteLine}>
              <Text style={{flex:1}}>Độ phân giải:</Text>
              <Text style={{flex:2}}>{this.state.phoneDetail.solution} </Text>
              </View>

              <View style={styles.brownLine}>
              <Text style={{flex:1}}>Camera:</Text>
              <Text style={{flex:2}}>{this.state.phoneDetail.camera} </Text>
              </View>

              <View style={styles.whiteLine}>
              <Text style={{ flex: 1 }}>Ram:</Text>
              <Text  style={{flex:2}}>{this.state.phoneDetail.ram} GB </Text>
              </View>

              <View style={styles.brownLine}>
              <Text style={{ flex: 1 }}>Rom:</Text>
              <Text style={{ flex: 2 }}>{this.state.phoneDetail.rom} GB </Text>
              </View>

              <View style={styles.whiteLine}>
              <Text style={{ flex: 1 }}>Pin:</Text>
              <Text  style={{flex:2}}>{this.state.phoneDetail.pin} mah </Text>
              </View>
          </View>
          </ScrollView>
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
    marginHorizontal: 0
  },
  swiperImage: {
    flex:1,
    width:height/2.7
  },
  imageBack: {
    width: 30,
    height: 30
  },
  description: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  whiteLine:{
    height:30,
    paddingLeft:10,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  brownLine:{
    backgroundColor:'#DFDFDF',
    height:30,
    alignItems:'center',
    paddingLeft:10,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});