import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {height}=Dimensions.get('window');
const imageHeight = height*0.37*5/6;
const imageWidth = imageHeight*1.84;

const url='https://funnyshopjonah.000webhostapp.com/images/type/';
export default class Category extends Component {
  
    render() {
    const { navigation,screenProps}= this.props;
    const getList=screenProps.map((data) => {
      return (
        <View key={data.id}
              style={{flex:1}}
              >
          <TouchableOpacity onPress={()=>{
              const { goToList }= this.props;
              goToList(data.id);
          }}>
            <Text>{data.name}</Text>
            <Image source={{ uri: `${url}${data.image}` }}
              style={{ width: 100, height: 50 }}
            />
          </TouchableOpacity>
        </View>

      )
    })
    return (
      <View style={styles.collecions}>
        <View style={{flex:1,justifyContent:'center'}}>
        <Text style={styles.text}>
          Swiper Image
        </Text>
        </View>
        <View style={{flex:5}}>
        <Swiper style={{flex:1,justifyContent:'center',alignItems:'center'}}
                loop={false}
                showsPagination={true}
        >         
          {getList}
        </Swiper>
        </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  collecions:{
    backgroundColor:'#FFF',
    height:height*0.38,
    margin:10,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:3
  },
  text:{
    fontSize:15,
    color:'#183544',
    margin:5
  },

})
