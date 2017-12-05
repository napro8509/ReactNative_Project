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
  constructor(props){
    super(props);
    this.state={
      topProduct:[],
    }
  }
  componentDidMount(){
    fetch("https://funnyshopjonah.000webhostapp.com")
    .then(response =>response.json())
    .then(responseJson=>{
      this.setState({topProduct:responseJson.product});
      console.log(this.state.topProduct);
    })
  }
  render() {
    const { navigation } = this.props;
    const {screenProps}= this.props;
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
            topProduct={this.state.topProduct}
          />
          <Category goToList={(idList) => { navigation.navigate('ListProduct', { id: idList }); }}
            screenProps={screenProps}
          />
        </View>
      </ScrollView>
    );
  }
}
