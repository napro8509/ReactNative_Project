import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TabView extends React.Component{

  openTab(){
    const {open}=this.props;
    open();
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'blue'}}>
        <TouchableOpacity onPress={this.openTab.bind(this)}>
          <Text>
           Dong tap view
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
