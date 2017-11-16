import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class DetailScreen extends Component{
  render() {
    return (
      <View style={styles.panel}>
        <TouchableOpacity>
          <View style={styles.button}>
          <Text>
            Login
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  panel:{
    flex:1,
    backgroundColor:'#3399FF',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'green',
    width:150,
    height:30,
    borderRadius:20,
  },
  text:{

  }
})
