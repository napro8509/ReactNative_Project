import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class ListProduct extends Component{
  render() {
    const {navigation}=this.props;
    return (
      <View style={{flex:1,backgroundColor:'blue'}}>
        <Text>
          This is ListProduct
        </Text>
        <TouchableOpacity onPress={()=>{
          navigation.goBack();
        }}>
        <Text>
        Go back to mainView
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
