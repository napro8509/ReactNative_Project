import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainView from '../screens/HomeScreen/mainView';
import Drawer from 'react-native-drawer';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import SearchScreen from '../screens/HomeScreen/searchScreen';
import MenuView from '../screens/MenuScreen/menuView';
import MainMenu from '../screens/MenuScreen/mainMenu';
import getToken from '../Api/getToken';
import checkLogIn from '../Api/checkToken';
import global from '../Global/global';
//import cuasochinh from './mainView';
export const ListScreen=StackNavigator({
  Shop:{screen: HomeScreen},
  Search:{screen: SearchScreen}
});

export default class App extends Component {
  openOrder(){
    const {navigation}=this.props;
    navigation.navigate('OrderHistory');
  }
  componentDidMount(){
    getToken()
    .then(res=>checkLogIn(res))
    .then(response=>
      {
        console.log(response);
        global.onLogIn(response.user)
      })
    .catch(error=>console.log(error));
  }
  closeControlPanel = () => {
   this.drawer.close()
 };
 openControlPanel = () => {
   this.drawer.open()
 };
 constructor(props){
   super(props);
   this.state={
     selectedTab:'home'
   }
   global.goToOrder=this.openOrder.bind(this);
 }

  render(){
    return (
      <Drawer
      openDrawerOffset={0.4}
      tapToClose={true}
      ref={(ref) => this.drawer = ref}
      content={<MainMenu/>}
      >
      <MainView open={this.openControlPanel.bind(this)} />
    </Drawer>
    );
  }
}
