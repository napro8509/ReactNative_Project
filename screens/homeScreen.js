import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SaleCollection from './HomeScreen/saleCollection.js';
import GiftVoucher from './HomeScreen/giftVoucher.js';
import Category from './HomeScreen/category.js';
export default class HomeScreen extends Component{
  /*static navigationOptions={
    title:'Home Screen'
  };*/
  render(){
    const {navigate}=this.props.navigation;
    return(
      <View style={{flex:1,backgroundColor:'#DBDBD8'}}>
      <ScrollView contentContainerStyle={{}}>
        <TouchableOpacity>
        <SaleCollection/>
        </TouchableOpacity>
        <TouchableOpacity>
        <GiftVoucher/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>
          navigate('Search',{user:'Na'})
        }>
        <Text>
        This is HomeScreen
        </Text>
        </TouchableOpacity>
        <Category/>
      </ScrollView>
      </View>
    );
  }
}
