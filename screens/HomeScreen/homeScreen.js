import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SaleCollection from './saleCollection.js';
import GiftVoucher from './giftVoucher.js';
import Category from './category.js';
import TopProduct from './topProduct.js';
export default class HomeScreen extends Component {
  /*static navigationOptions={
    title:'Home Screen'
  };*/

  render() {
    const { navigation } = this.props;
    const {screenProps}= this.props;
    console.log("1111111");
    console.log(screenProps)
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
          <TouchableOpacity>
            <SaleCollection />
          </TouchableOpacity>
          <TouchableOpacity>
            <GiftVoucher />
          </TouchableOpacity>
          <TopProduct goToDetail={(idPhone) => { navigation.navigate('ProductDetail', { id: idPhone }); }}
            topProduct={screenProps}
          />
          <Category goToList={(idList) => { navigation.navigate('ListProduct', { id: idList }); }}
            screenProps={screenProps}
          />
        </View>
      </ScrollView>
    );
  }
}
