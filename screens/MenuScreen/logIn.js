import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class LogIn extends Component{
    render() {
      const { navigate }= this.props.navigation;
      return (
        <View style={styles.panel}>
          <Image style={styles.hinh}
            source={require('../../images/profile_white.png')}
            resizeMode="stretch" />
          <View style={styles.allbutton}>
          <TouchableOpacity onPress={()=>{
            navigate('Authentication');
          }}>
            <View style={styles.button}>
            <Text style={styles.text}>
              Sign In
            </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const styles=StyleSheet.create({
  panel:{
    flex:1,
    backgroundColor:'#183544',
    alignItems:'center',
    borderRightWidth:3,
    borderColor:'#FFF'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    width:150,
    height:30,
    borderRadius:20,
    shadowColor:'gray',
    shadowOpacity:0.2,
    marginBottom:10,
    elevation:3
  },
  text:{
    color:'#3399FF'
  },
  allbutton:{
    flex:1,
    paddingTop:50,
    alignItems:'center'
  },
  hinh:{
    width:100,
    height:100,
    marginTop:30,
    borderRadius:500
  }
})
