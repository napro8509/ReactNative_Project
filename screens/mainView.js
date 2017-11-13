import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class MainView extends Component<{}> {
  closeTabView(){
    const {open}=this.props;
    open();
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
      <TouchableOpacity onPress={this.closeTabView.bind(this)}>
        <Text style={{color:'white'}}>
         Mo tap view
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color:'white'}}>
         Mo tap view
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
