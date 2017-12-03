import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import getPhoneDetail from '../../WebServices/getPhoneDetail';

export default class ProductDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      phoneDetail:{},
    }
  }
  componentDidMount(){
    const {params} =this.props.navigation.state;
    console.log(params);
    getPhoneDetail(params.id)
    .then(phoneInformation=>{
      this.setState({phoneDetail:phoneInformation[0]});
      console.log(phoneInformation);
    })
  }
  render() {
    const {navigation}=this.props;
    return (
      <View style={{flex:1,backgroundColor:'yellow'}}>
        <Text>
          This is Product Detail
        </Text>
        <TouchableOpacity onPress={()=>{
          navigation.goBack();
        }}>
        <Text>
        {this.state.phoneDetail.name}
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.goBack('id-1511750056576-1');
        }}>
        <Text>
        Go back to Main
        </Text>
        </TouchableOpacity>
        <Text>
          {navigation.state.key}
        </Text>
      </View>
    );
  }
}
