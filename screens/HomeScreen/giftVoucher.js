import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height}=Dimensions.get('window');
const imageHeight = height*0.37*5/6;
const imageWidth = imageHeight*1.88;
export default class GitfVoucher extends Component{
  goToListPhone() {
    const { goToList } = this.props;
    goToList();
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goToListPhone.bind(this)}>
      <View style={styles.collecions}>
        <View style={{flex:5,justifyContent:'center',alignItems:'center',backgroundColor:'transparent',borderRadius:10}}>
          <Image
            source={{uri:'https://znews-photo-td.zadn.vn/w1024/Uploaded/ynssi/2017_10_06/pixel2xl_iphonex_note1.jpg'}}
            resizeMode="cover"
            style={{height:imageHeight,width:imageWidth,borderRadius:10}}
          />
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
const styles= StyleSheet.create({
  collecions:{
    borderRadius:10,
    backgroundColor:'transparent',
    height:imageHeight,
    margin:10,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:3,
  },
  text:{
    fontSize:15,
    color:'#183544',
    margin:5
  }
})
