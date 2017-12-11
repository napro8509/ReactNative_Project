import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    Alert
} from 'react-native';
import getToken from '../../../Api/getToken';
import update from '../../WebServices/updateInfo';
import global from '../../../Global/global';
const {width, height}=Dimensions.get('window');
export default class ChangeInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            address:'',
            name:'',       
            phone:''
        }
    }
    onSuccess(){
      const{navigation}=this.props;
      Alert.alert(
        'Notification',
        'Update Information Success!',
        [
          {text: 'OK', onPress: () =>navigation.goBack()},
        ],
        { cancelable: false }
      )
    }
    change(){
      const {navigation}=this.props;
        const{address,name,phone}=this.state;
        getToken()
        .then(token=>{
            update(token,name,address,phone)
            .then(user=>
              {
                this.onSuccess();
                global.onLogIn(user);
              })
            .catch(error=>console.log(error))
            
        });

    }
    componentDidMount(){
      const {user}=this.props.navigation.state.params;
      this.setState({
        address:user.address,
        name:user.name,
        phone:user.phone
      })
    }
    render(){
        const {navigation} =this.props;
        return(
            <View style={styles.container}> 
                    <View style={styles.header}>
                      <TouchableOpacity onPress={()=>{
                        navigation.goBack();
                      }}>
                      <Image style={styles.image}
                        source={require('../../../images/back.png')}
                      />
                      </TouchableOpacity>
                      <Image style={{height:height/16,width:height/7}}
                        source={require('../../../images/shopLogo.png')}
                        />
                        <Image style={styles.image}
                          source={require('../../../images/profile_white.png')}
                          />
                    </View>
            <View style={styles.body}>
            <TextInput style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder='Your Name'
                        value={this.state.name}
                        onChangeText={text=>this.setState({name:text})}
            >
            </TextInput>
            <TextInput style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder='Your Address'
                        value={this.state.address}
                        onChangeText={text=>this.setState({address:text})}
            >
            </TextInput>
            <TextInput style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder='Your Phone'
                        value={this.state.phone}
                        onChangeText={text=>this.setState({phone:text})}
            >
            </TextInput>
      
            <TouchableOpacity onPress={this.change.bind(this)}>
            <View style={styles.button}>
              <Text style={{color:'#3399FF'}}>
                Update Information
              </Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#183544',
        borderRightWidth:3,
        borderColor:'white'
      },
      header:{
        height:height/8,
        backgroundColor:'#183544',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },
    body:{
      flex:1,
      paddingTop:30
    },
    
    textInput:{
      backgroundColor:'white',
      marginLeft:5,
      marginRight:5,
      marginTop:5,
      marginBottom:10,
      paddingVertical:0,
      borderRadius:10,
      paddingLeft:10
    },
    button:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      height:30,
      marginHorizontal:5,
      borderRadius:20,
      shadowColor:'gray',
      shadowOpacity:0.2,
      marginVertical:10,
      elevation:3
    },
    image:{
        height:height/17,
        width:height/17,
        marginLeft:5,
        marginRight:5
      },
  })
  