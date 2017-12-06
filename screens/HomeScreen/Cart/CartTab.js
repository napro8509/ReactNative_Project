import React,{ Component } from "react";
import {

} from 'react-native';
import Cart from './Cart';
import ProductDetail from '../ProductInformation/productDetail';
import {StackNavigator} from 'react-navigation'; 

 export const CartStack = StackNavigator({
    Cart: { screen: Cart },
    ProductDetail: { screen: ProductDetail },
  },
    {
      headerMode: 'none'
    }
  );

export default class CartTab extends Component {

    render(){
        const {cartArray}=this.props;
        return(
            <CartStack screenProps={cartArray}/>
        );
    }
}