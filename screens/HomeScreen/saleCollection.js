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
export default class SaleCollection extends Component{
  goToListPhone(){
    const {goToList}=this.props;
    goToList();
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goToListPhone.bind(this)}>
      <View style={styles.collecions}>
        <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
          <Image
            source={{uri:'https://magiamgia247.net/wp-content/uploads/2017/04/Khuyến-mãi-điện-thoại-giảm-giá-tại-lazada.jpg'}}
            resizeMode="stretch"
            style={{height:imageHeight,width:imageWidth}}
          />
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
const styles= StyleSheet.create({
  collecions:{
    backgroundColor:'#FFF',
    height:imageHeight,
    marginVertical:7,
    marginHorizontal:10,
    marginBottom:0,
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
