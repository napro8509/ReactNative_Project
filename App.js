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
  FlatList
} from 'react-native';



export default class App extends Component<{}> {
	constructor(prop){
		super(prop);
		this.state={
			mang:[
				{key:'a',hoten:'Na'},
				{key:'b',hoten:'Nguyen'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
				{key:'c',hoten:'Lan'},
				{key:'d',hoten:'Sanh'},
			]
		}
	}
  render() {
    return (
      <View >
       <FlatList
       		data={this.state.mang}
       		renderItem=
       		{({item})=> 
       		<View style={styles.row}>
       		<Text>{item.key}
       		</Text>
       		
       		<Text>{item.hoten}
       		</Text>
       		</View>
       		}
       		horizontal={false}
       		numColumns={3}
       		/> 
       	
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
  	borderBottomWidth:1,
  	padding:50,
  	borderRightWidth:1
  }
});
