import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const {height}=Dimensions.get('window');
const imageHeight = height*0.37*5/6;
const imageWidth = imageHeight*1.84;

export default class Category extends Component<{}>{
  render() {
    return (
      <View style={styles.collecions}>
        <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.text}>
          Swiper Image
        </Text>
        </View>
        <View style={{flex:5}}>
        <Swiper style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,backgroundColor:'red'}}>
          </View>
          <View style={{flex:1,backgroundColor:'green'}}>
          </View>
          <View style={{flex:1,backgroundColor:'blue'}}>
          </View>
        </Swiper>
        </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  collecions:{
    backgroundColor:'#FFF',
    height:height*0.38,
    margin:10,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:3
  },
  text:{
    fontSize:15,
    color:'#183544',
    margin:5
  },

})
