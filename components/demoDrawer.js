import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainView from '../screens/mainView';
import TabView from '../screens/tabView'
import Drawer from 'react-native-drawer';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
//import cuasochinh from './mainView';
const ListScreen=StackNavigator({
  Shop:{screen: HomeScreen},
  Search:{screen: SearchScreen}
});
export default class App extends Component {
  closeControlPanel = () => {
   this.drawer.close()
 };
 openControlPanel = () => {
   this.drawer.open()
 };

  render(){
    return (
      <Drawer
      openDrawerOffset={0.4}
      tapToClose={true}
      ref={(ref) => this.drawer = ref}
      content={<ListScreen/>}
      >
      <MainView open={this.openControlPanel.bind(this)} />
    </Drawer>
    );
  }
}
