import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';

const {height} = Dimensions.get('window');
export default class Header extends Component{
  openDrawer(){
    const{Open}=this.props;
    Open();
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity onPress={this.openDrawer.bind(this)}>
          <Image style={styles.image}
             source={require('../images/menu.png')}
          />
        </TouchableOpacity>
        <Image style={{height:height/16,width:height/7}}
            source={require('../images/shopLogo.png')}
              >
        </Image>
        <TouchableOpacity>
          <Image style={styles.image}
             source={require('../images/phone.png')}
          />
          </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <TextInput style={styles.title}
                    underlineColorAndroid='transparent'
                    placeholder='Searching for something?'
        >
        </TextInput>
      </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    height: height/8 ,
    backgroundColor:'#183544',
    paddingLeft:15,
    paddingRight:15,
    //paddingTop:10,
    justifyContent:'center',
    borderBottomWidth:1,
    borderColor:'white'
  },
  image:{
    height:height/17,
    width:height/17,
    marginLeft:5,
    marginRight:5
  },
  title:{
    backgroundColor:'white',
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:10,
    paddingVertical:0,
    borderRadius:10,
    paddingLeft:10
  }
  }
)
