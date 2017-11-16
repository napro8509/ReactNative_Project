import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import DetailScreen from '../screens/detailScreen';
import Header from '../Header/header';
import TabNavigator from 'react-native-tab-navigator';

export const ListScreen=StackNavigator({
  Shop:{screen: HomeScreen},
  Search:{screen: SearchScreen}
},
  {
    headerMode:'none'
  }
);
/*export var Tabs= TabNavigator({
  Home:{
    screen: ListScreen,
    navigationOptions:{
      tabBarLabel:"Home",
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
  tabBarPosition: 'top',
//  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor:'red',
    inactiveBackgroundColor:'yellow',
    inactiveTintColor:'white',
    showIcon: true,
    labelStyle: {
                  fontSize: 10,
                  padding:0,
                  margin:-3
                },
  },
},
);
*/
export default class MainView extends Component<{}> {
  openTabView(){
    const {open}=this.props;
    open();
  }
  constructor(prop){
		super(prop);
		this.state={
			selectedTab:'home'
		}
	}
  render(){
    return(

      /*<Header Open={this.openTabView.bind(this)}/>*/
      /*<Tabs/>*/
      <View style={{flex:1}}>
      <Header Open={this.openTabView.bind(this)}/>
      <TabNavigator /*tabBarStyle={{backgroundColor:'#183544'}}*/>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'home'}
        title="Home"
        titleStyle={{color:'black'}}
        selectedTitleStyle={{color:'green'}}
        renderIcon={() =>
          <Image style={{width:20,height:20}}
            source={require('../images/home.png')}
            resizeMode="stretch" />
          }
        renderSelectedIcon={() => <Image style={{width:20,height:20}}
          source={require('../images/home_red.png')}
          resizeMode="stretch"
          />}
        onPress={() => this.setState({ selectedTab: 'home' })}>
        {<ListScreen/>}
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'profile'}
        title="Profile"
        titleStyle={{color:'black'}}
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
        {<DetailScreen/>}
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'cart'}
        title="Cart"
        titleStyle={{color:'black'}}
        renderIcon={() =>
          <Image style={{width:20,height:20}}
            source={require('../images/cart.png')}
            resizeMode="stretch" />
          }
          renderSelectedIcon={() => <Image style={{width:20,height:20}}
          source={require('../images/cart_red.png')}
          resizeMode="stretch"
          />}
          badgeText="3"
        onPress={() => this.setState({ selectedTab: 'cart' })}>
        {<DetailScreen/>}
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'search'}
        title="Search"
        titleStyle={{color:'black'}}
        renderIcon={() =>
          <Image style={{width:20,height:20}}
            source={require('../images/search.png')}
            resizeMode="stretch" />
          }
          renderSelectedIcon={() => <Image style={{width:20,height:20}}
          source={require('../images/search_red.png')}
          resizeMode="stretch"
          />}
        onPress={() => this.setState({ selectedTab: 'search' })}>
        {<DetailScreen/>}
      </TabNavigator.Item>
    </TabNavigator>
    </View>


    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    padding:0,
    margin:0
  },
});
