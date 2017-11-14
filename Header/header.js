import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

const {height} = Dimensions.get('window');
export default class Header extends Component{
  openDrawer(){
    const{Open}=this.props;
    Open();
  }
  render(){
    return(
      <View style={{height: height/8 ,backgroundColor:'pink'}}>
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Image

          />
        </TouchableOpacity>
      </View>
    );
  }
}
