import React,{ Component } from "react";
import {

} from 'react-native';
import Search from './Search';
import ProductDetail from '../ProductInformation/productDetail';
import {StackNavigator} from 'react-navigation'; 

 export const SearchNavigator = StackNavigator({
    Search: { screen: Search },
    ProductDetail: { screen: ProductDetail },
  },
    {
      headerMode: 'none'
    }
  );

export default class SearchTab extends Component {

    render(){
        return(
            <SearchNavigator/>
        );
    }
}