import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {height}=Dimensions.get('window');
const imageHeight = height*0.37*5/6;
const imageWidth = imageHeight*1.84;
export default class GitfVoucher extends Component<{}>{
  render() {
    return (
      <View style={styles.collecions}>
        <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.text}>
          GIFT VOUCHER
        </Text>
        </View>
        <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
          <Image
            source={{uri:'http://en.data.coolicool.com/topic/blackview/banner.jpg'}}
            resizeMode="stretch"
            style={{height:imageHeight,width:imageWidth}}
          />
        </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  collecions:{
    backgroundColor:'#FFF',
    height:height*0.35,
    margin:10,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:3,
    borderRadius:5
  },
  text:{
    fontSize:15,
    color:'#183544',
    margin:5
  }
})
