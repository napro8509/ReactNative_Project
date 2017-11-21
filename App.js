import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import MenuView from './screens/MenuScreen/menuView';


export default class App extends Component {
  render() {
    return (
      <MenuView/>
    );
  }
}
