import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuView from './menuView';
import LogIn from './logIn';
import Authentication from './Authentication/authentication';

const MainMenuScreen=StackNavigator({
  Information:{screen: MenuView},
  Login:{screen: LogIn},
  Authentication:{screen: Authentication}
},
  {
    headerMode:'none',
  });
export default class MainMenu extends Component<{}>{
  render() {
    return (
      <MainMenuScreen/>
    );
  }
}
