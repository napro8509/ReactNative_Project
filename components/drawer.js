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
  TouchableOpacity,
  DrawerLayoutAndroid
} from 'react-native';



export default class App extends Component<{}> {

  render() {
    this.openDrawer = () => {
      this.refs.DRAWER.openDrawer()
      }
    this.closeDrawer = () => {
      this.refs.DRAWER.closeDrawer()
      }
    var navigationView = (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
        Day la drawer android
        </Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={'DRAWER'}
        drawerWidth={100}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center',backgroundColor:'blue'}}>
          <TouchableOpacity onPress={()=>this.openDrawer()}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          </TouchableOpacity>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
