import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class SearchScreen extends Component{
  render() {
    const {params}=this.props.navigation.state;
    return (
      <View style={{flex:1,backgroundColor:'red'}}>
        <Text>
        This is search screen
        </Text>
        <TouchableOpacity onPress={()=>
        {this.props.navigation.goBack()}
        }>
        <Text>
        Go Bach to HomeScreen {params.user}
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
