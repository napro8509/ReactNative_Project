import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
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
      tabBarLabel:'Home'
    }
  },
  Detail:{
    screen: DetailScreen,
    navigationOptions:{
      tabBarLabel:'Detail'
    }
  },
},
  {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
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
