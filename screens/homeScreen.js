import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component{
  static navigationOptions={
    title:'Home Screen'
  };
  render(){
    const {navigate}=this.props.navigation;
    return(
      <View style={{flex:1,backgroundColor:'grey'}}>
        <TouchableOpacity onPress={()=>navigate('Search',{user:'Na'})}>
        <Text>
        This is HomeScreen
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
