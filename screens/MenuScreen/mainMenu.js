import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuView from './menuView';
import LogIn from './logIn';
const MainMenuScreen=StackNavigator({
  Information:{screen: MenuView},
  Login:{screen: LogIn}
},
  {
  headerMode:'none'
  }
);

export default class MainMenu extends Component<{}>{
  render() {
    return (
      <MainMenuScreen/>
    );
  }
}
