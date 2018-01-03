import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import global from '../Global/global';
import { Icon } from 'react-native-vector-icons';
const {height} = Dimensions.get('window');
export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      key:''
    }
  }
  openDrawer(){
    const{Open}=this.props;
    Open();
  }
  goToSearch(){
    console.log('Go to search');
    if(this.state.key!='')
    global.openSearch(this.state.key);
  }
  render(){
    return(
      <View style={styles.container}>
      <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{
                flex: 1,
              }}
              resizeMode='cover'
              source={{ uri: 'http://theiphonewalls.com/wp-content/uploads/2013/09/iOS-7-Glow.png' }}
            />
          </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:3}}>
      
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
      <View style={{flex:1,height:height/25,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TextInput style={styles.title}
                    underlineColorAndroid='transparent'
                    placeholder='Searching for something?'
                    onChangeText={(text)=>{
                      this.setState({key:text});
                    }}
                    onEndEditing={this.goToSearch.bind(this)}
        >
        </TextInput>
      </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    height: height/10 ,
    backgroundColor:'#183544',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:0,
    justifyContent:'center',

  },
  image:{
    height:height/17,
    width:height/17,
    marginLeft:5,
    marginRight:5
  },
  title:{
    flex:1,
    backgroundColor:'white',
    marginLeft:5,
    marginRight:5,
    marginTop:1,
    marginBottom:2,
    paddingVertical:0,
    borderRadius:10,
    paddingLeft:10
  },
  searchIcon:{
    padding:10
  }
  }
)
