import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class ProductDetail extends Component{
  render() {
    const {navigation}=this.props;
    return (
      <View style={{flex:1,backgroundColor:'yellow'}}>
        <Text>
          This is Product Detail
        </Text>
        <TouchableOpacity onPress={()=>{
          navigation.goBack();
        }}>
        <Text>
        Go back to mainView
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.goBack('id-1511750056576-1');
        }}>
        <Text>
        Go back to Main
        </Text>
        </TouchableOpacity>
        <Text>
          {navigation.state.key}
        </Text>
      </View>
    );
  }
}
