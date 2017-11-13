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
import TabNavigator from 'react-native-tab-navigator';


export default class App extends Component<{}> {

  constructor(prop){
		super(prop);
		this.state={
			selectedTab:'home'
		}
	}
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
      <View style={{flex:1}}>
      <DrawerLayoutAndroid
        ref={'DRAWER'}
        drawerWidth={100}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{alignItems: 'center',backgroundColor:'white'}}>
          <TouchableOpacity onPress={()=>this.openDrawer()}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right',backgroundColor:'pink'}}>Hello</Text>
          </TouchableOpacity>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
        <View style={{flex:1}}>
        <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() =>
            <Image style={{width:20,height:20}}
              source={require('../images/home.png')}
              resizeMode="stretch" />
            }
          renderSelectedIcon={() => <Image style={{width:20,height:20}}
            source={require('../images/home_red.png')}
            resizeMode="stretch"
            />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<View style={{flex:1,backgroundColor:'red'}}></View>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() =>
            <Image style={{width:20,height:20}}
              source={require('../images/profile.png')}
              resizeMode="stretch" />
            }
            renderSelectedIcon={() => <Image style={{width:20,height:20}}
            source={require('../images/profile_red.png')}
            resizeMode="stretch"
            />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<View style={{flex:1,backgroundColor:'green'}}></View>}
        </TabNavigator.Item>
      </TabNavigator>
      </View>
      </DrawerLayoutAndroid>
      </View>
    );
  }
}
