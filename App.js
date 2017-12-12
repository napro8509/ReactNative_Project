import React,{ Component } from "react";
import {

} from 'react-native';
import App from './components/demoDrawer';
import OrderHistory from './screens/HomeScreen/orderHistory';
import {StackNavigator} from 'react-navigation'; 

 export const Main = StackNavigator({
		App: { screen: App },
		OrderHistory: { screen: OrderHistory }
  },
    {
      headerMode: 'none'
    }
  );

export default class App1 extends Component {

    render(){
        return(
            <Main/>
        );
    }
}