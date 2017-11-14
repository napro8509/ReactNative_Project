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
      <View style={{height: height/9 ,backgroundColor:'green',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Image
             source={require('../images/menu.png')}
          />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:30}}>
          Mobile World
        </Text>
        <TouchableOpacity>
          <Image
             source={require('../images/phone.png')}
          />
          </TouchableOpacity>
      </View>
    );
  }
}
