import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      kq:"",
      token:"..."
    }
  }
  LOGIN(){
    fetch("http://192.168.1.98/DemoJWT/taoToken.php",{
      "method":"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        USERNAME:this.state.username,
        PASSWORD:this.state.password
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        kq:responseJson["token"]
      });
    })
  }
  render(){
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text>
            Login
          </Text>
        </View>
        <View style={styles.box}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          placeholder="UserName"
          value={this.state.username}
        />
        </View>
        <View style={styles.box}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          placeholder="PassWord"
          value={this.state.password}
        />
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={()=>{this.LOGIN()}}>
            <Text style={{backgroundColor:'black',color:'white'}}>
             LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text>
            {this.state.kq} {this.state.token}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  row:{
    flex:1,
  	borderBottomWidth:1,
  	padding:20,
  	borderRightWidth:1,
    flexDirection:'row'
  },
  box:{
    flex:2,
    justifyContent:'center',
    borderRadius:50
  },
  box2:{
    flex:4,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonbar:{
    backgroundColor:'black',
    flex:0.3
  }
});
