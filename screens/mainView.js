import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import DetailScreen from '../screens/detailScreen';
import Header from '../Header/header';
export const ListScreen=StackNavigator({
  Shop:{screen: HomeScreen},
  Search:{screen: SearchScreen}
},
  {
    headerMode:'none'
  }
);
export var Tabs= TabNavigator({
  Home:{
    screen: ListScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),

    }
  },
  Detail:{
    screen: DetailScreen,
    navigationOptions:{
      tabBarLabel:'Detail',
      tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/profile.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    }
  },
},
  {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    labelStyle: {
    fontSize: 10,
    padding:0,
    margin:0
  },
  },
});

export default class MainView extends Component<{}> {
  openTabView(){
    const {open}=this.props;
    open();
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
      <Header Open={this.openTabView.bind(this)}/>
      <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    paddingTop:0,
    marginTop:0
  },
});
