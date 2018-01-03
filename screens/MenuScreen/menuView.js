import React, {Component} from 'react';
import global from '../../Global/global';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

export default class MenuView extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLogIn:false,
      user:{}
    };
    global.onLogIn=this.onLogIn.bind(this);
    global.checkLogin=this.state.isLogIn;
  };
  onLogIn(user){
    this.setState({isLogIn:true,user})
    global.checkLogin=this.state.isLogIn;
  }
  openOder(){
    global.goToOrder();
  }
  render() {
    const {navigate} =this.props.navigation;
    const LogInJSX=(
      <View style= { styles.allbutton}>
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
    );

    const LogOutJSX=(
      <View style={{flex:1, justifyContent:'space-between',alignItems:'center'}}>
      <Text style={styles.name}>{this.state.user.name?this.state.user.name:''}</Text>
      <View style={styles.allbutton}>
      <TouchableOpacity onPress={this.openOder.bind(this)}>
        <View style={styles.button}>
        <Text style={styles.text}>
          Order History
        </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigate('ChangeInformation',{user:this.state.user});
      }}>
        <View style={styles.button}>
        <Text style={styles.text}>
          Change Information
        </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        AsyncStorage.removeItem('@token');
        this.setState({isLogIn:false});

      }}>
        <View style={styles.button}>
        <Text style={styles.text}>
          Sign Out
        </Text>
        </View>
      </TouchableOpacity>
      </View>
      </View>
    );

    const MainJSX= this.state.isLogIn ? LogOutJSX : LogInJSX;
    return (
      <View style={styles.panel}>
        <Image style={styles.hinh}
          source={require('../../images/profile_white.png')}
          resizeMode="stretch" />
        {MainJSX}
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
  },
  name:{
    color:'#FFF',
    fontWeight:'500',
    fontFamily:'Avenir'
  }
})
