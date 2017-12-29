import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
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
  constructor(props) {
    super(props);
    this.state = {
      topProduct: [],
    }
  }
  componentDidMount() {
    fetch("https://funnyshopjonah.000webhostapp.com")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ topProduct: responseJson.product });
      })
  }
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{
                flex: 1,
              }}
              resizeMode='cover'
              source={{ uri: 'http://theiphonewalls.com/wp-content/uploads/2013/09/iOS-7-Glow.png' }}
            />
          </View>
          <SaleCollection goToList={() => { navigation.navigate('ListProduct', { id: 'COLLECTION', title: 'COLLECTION' }) }} />
          <GiftVoucher goToList={() => { navigation.navigate('ListProduct', { id: 'FLAGSHIP', title: 'FLAGSHIP 2017' }) }} />
          <TopProduct goToDetail={(idPhone) => { navigation.navigate('ProductDetail', { id: idPhone }); }}
            topProduct={this.state.topProduct}
          />
          <Category goToList={(idList) => { navigation.navigate('ListProduct', { id: idList }); }}
          />
        </View>
      </ScrollView>
    );
  }
}
