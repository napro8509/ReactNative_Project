import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainView from '../screens/mainView';
import TabView from '../screens/tabView'
import Drawer from 'react-native-drawer';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import MenuView from '../screens/menuView';
import TabNavigator from 'react-native-tab-navigator';

//import cuasochinh from './mainView';
export const ListScreen=StackNavigator({
  Shop:{screen: HomeScreen},
  Search:{screen: SearchScreen}
});
export const Tabs= TabNavigator({
  Home:{
    screen: ListScreen,
    navigationOptions:{
      tabBarLabel:'Home'
    }
  },
  Search:{
    screen: ListScreen,
    navigationOptions:{
      tabBarLabel:'Search'
    }
  }
})

export default class App extends Component {
  closeControlPanel = () => {
   this.drawer.close()
 };
 openControlPanel = () => {
   this.drawer.open()
 };
 constructor(prop){
   super(prop);
   this.state={
     selectedTab:'home'
   }
 }

  render(){
    return (
      <Drawer
      openDrawerOffset={0.4}
      tapToClose={true}
      ref={(ref) => this.drawer = ref}
      content={<MenuView/>}
      >
      <MainView open={this.openControlPanel.bind(this)} />
    </Drawer>

    );
  }
}
