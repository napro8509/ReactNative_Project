/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';



export default class App extends Component<{}> {
	constructor(prop){
		super(prop);
		this.state={
			mang:[],
      refresh:false
		}
	}


  render() {
    return (
      <View >
       <FlatList
       		data={this.state.mang}
       		renderItem=
       		{({item})=>
          <View style={{flex:1}}>
       		<View style={styles.row}>
            <View style={styles.left}>
              <Image style={{height:100,width:100,borderRadius:50}}
                    source={{uri:item.Hinh}}/>
            </View>
            <View style={styles.right}>
              <Text>
              {item.Matruong}
              </Text>
              <Text>
              {item.Tentruong}
              </Text>
              <Text>
              {item.Ngaybatdau}
              </Text>
              <Text>
              {item.Ngayketthuc}
              </Text>
              <Text>
              {item.Noidung}
              </Text>
            </View>
       		</View>
          <TouchableOpacity>
          <View style={styles.buttonbar}>

              <Text style={{color:'red'}}>
              Dang ki
              </Text>

          </View>
          <View style={styles.buttonbar}>

              <Text style={{color:'green'}}>
              Dang nhap
              </Text>

          </View>
          <View style={styles.buttonbar}>

              <Text style={{color:'white'}}>
              Dang xuat
              </Text>

          </View>
          </TouchableOpacity>
          </View>

       		}
       		/>

      </View>
    );
  }
  componentDidMount(){
    fetch("http://192.168.1.98/WebService/getData.php")
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        mang:responseJson
      });
    })
    .catch((error)=>{console.log(error)});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flex:1,
  	borderBottomWidth:1,
  	padding:20,
  	borderRightWidth:1,
    flexDirection:'row'
  },
  left:{
    flex:2,
    justifyContent:'center',
    borderRadius:50
  },
  right:{
    flex:4,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonbar:{
    backgroundColor:'black',
    flex:0.3
  }
});
