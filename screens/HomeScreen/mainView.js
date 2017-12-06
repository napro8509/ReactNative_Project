import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './homeScreen';
import SearchScreen from './searchScreen';
import DetailScreen from './detailScreen';
import Header from '../../Header/header';
import TabNavigator from 'react-native-tab-navigator';
import ListProduct from './ProductInformation/listProduct';
import ProductDetail from './ProductInformation/productDetail';
import CartTab from './Cart/CartTab';
import global from '../../Global/global';
import getCart from '../../Api/getCart';
import saveCart from '../../Api/saveCart';
export const ListScreen = StackNavigator({
  Shop: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  ListProduct: { screen: ListProduct },
  ProductDetail: { screen: ProductDetail },
},
  {
    headerMode: 'none'
  }
);

export default class MainView extends Component {
  openTabView() {
    const { open } = this.props;
    open();
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      type:[],
      topProduct:[],
      cartArray:[]
    }
    global.addPhoneToCart=this.addPhoneToCart.bind(this);
    global.addQuantity=this.addQuantity.bind(this);
    global.subQuantity=this.subQuantity.bind(this);
    global.removeCart=this.removeCart.bind(this);
    checkExist=this.checkExist.bind(this);
  }
   checkExist=(array,id)=>{
     let a;
     console.log("Vao check exist");
    array.map(e=>{
      if(e.phone.id===id){
        console.log('true');
        a=1;
        return 1;
      }
    });
    if(a!==1){
    console.log('false');
    return 0;
    }
    else return 1;
  }
  addPhoneToCart(phone){
    console.log(checkExist(this.state.cartArray,phone.id));
    console.log("check ham");
    if(checkExist(this.state.cartArray,phone.id)===1){
      global.addQuantity(phone.id);
      console.log('Them so luong');
    }else
    this.setState({cartArray:this.state.cartArray.concat({phone,quantity:1})},()=>saveCart(this.state.cartArray));
    console.log('Them phone');
  }
  removeCart(phoneId){
    console.log('Remove cart Main View');
    const array=this.state.cartArray.filter(e=>e.phone.id!==phoneId);
    this.setState({cartArray:array},()=>saveCart(this.state.cartArray))
  }
  addQuantity(phoneId){
    console.log('Add quantity Main View');
    const array=this.state.cartArray.map(e=>{
      if(e.phone.id!==phoneId)
      {
        return e;
      }
      else  return {
        phone:e.phone,
        quantity:e.quantity+1
      };
    });
    this.setState({cartArray:array},()=>saveCart(this.state.cartArray))
  }
  subQuantity(phoneId){
    console.log('Sub quantity Main View');
    const array=this.state.cartArray.map(e=>{
      if(e.phone.id!==phoneId||e.quantity<=1)
      {
        return e;
      }
      else  return {
        phone:e.phone,
        quantity:e.quantity-1
      };
    });
    this.setState({cartArray:array},()=>saveCart(this.state.cartArray))
  }
  componentDidMount() {
    fetch("https://funnyshopjonah.000webhostapp.com")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState(
         {type:responseJson.type}
      );
      console.log('11111111111111111');
      console.log(this.state.type);
    })
    .catch((error) => { console.log(error)});
    getCart()
    .then(cartJson =>{
      this.setState({cartArray:cartJson})
    })
  }
  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <Header Open={this.openTabView.bind(this)} />
        <TabNavigator /*tabBarStyle={{backgroundColor:'#183544'}}*/>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            titleStyle={{ color: 'black' }}
            selectedTitleStyle={{ color: 'green' }}
            renderIcon={() =>
              <Image style={{ width: 20, height: 20 }}
                source={require('../../images/home.png')}
                resizeMode="stretch" />
            }
            renderSelectedIcon={() => <Image style={{ width: 20, height: 20 }}
              source={require('../../images/home_red.png')}
              resizeMode="stretch"
            />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {<ListScreen screenProps={this.state.type}
            />}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            titleStyle={{ color: 'black' }}
            renderIcon={() =>
              <Image style={{ width: 20, height: 20 }}
                source={require('../../images/profile.png')}
                resizeMode="stretch" />
            }
            renderSelectedIcon={() => <Image style={{ width: 20, height: 20 }}
              source={require('../../images/profile_red.png')}
              resizeMode="stretch"
            />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            {<DetailScreen />}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="Cart"
            titleStyle={{ color: 'black' }}
            renderIcon={() =>
              <Image style={{ width: 20, height: 20 }}
                source={require('../../images/cart.png')}
                resizeMode="stretch" />
            }
            renderSelectedIcon={() => <Image style={{ width: 20, height: 20 }}
              source={require('../../images/cart_red.png')}
              resizeMode="stretch"
            />}
            badgeText={this.state.cartArray.length}
            onPress={() => this.setState({ selectedTab: 'cart' })}>
            {<CartTab cartArray={this.state.cartArray}/>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Search"
            titleStyle={{ color: 'black' }}
            renderIcon={() =>
              <Image style={{ width: 20, height: 20 }}
                source={require('../../images/search.png')}
                resizeMode="stretch" />
            }
            renderSelectedIcon={() => <Image style={{ width: 20, height: 20 }}
              source={require('../../images/search_red.png')}
              resizeMode="stretch"
            />}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            {<DetailScreen />}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    padding: 0,
    margin: 0
  },
});
