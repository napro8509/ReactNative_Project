import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const url='';
const {height,width} = Dimensions.get('window');
export default class TopProduct extends Component{
  render() {
    const {goToDetail,topProduct}=this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>
          TOP PRODUCT
        </Text>
        </View>
        <FlatList 
        data={topProduct}
          numColumns={2}
          contentContainerStyle={styles.body}
          renderItem={({ item }) =>
            <View style={styles.productContainer}>
              <TouchableOpacity onPress={() => {
                goToDetail(item.id);
              }}>
                <Image style={styles.image}
                  resizeMode="stretch"
                  source={{ uri: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459041871679213_1.jpg' }} />
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.productName}> {item.name} </Text>
                <Text style={styles.productOldPrice}> 150$</Text>
                <Text style={styles.productPrice}> Price : {item.price}$ </Text>
                </View>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    margin:10,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    elevation:1,
    paddingBottom:10,
    paddingTop:10,
  },
  titleContainer:{
    backgroundColor:'white',
    height:15,
    justifyContent:'center',
    paddingLeft:10,
  },
  title:{
    color:'black',
    fontSize:15,
    fontFamily:'Avenir',
    marginLeft:3
  },
  image:{
    height:(width-70)/2,
    width:(width-70)/2,
  },
  body:{
    marginTop:3,
    justifyContent:'center',
  },
  productContainer:{
    width:(width-70)/2,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:7,
    backgroundColor:'#FFF',
    marginTop:10,
    marginLeft:15,
    marginBottom:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  productName:{

    fontFamily:'Avenir',
    color:'#662F90',
    fontWeight:'500'
  },
  productOldPrice:{
    fontFamily:'Avenir',
    color:'#DFDFDF',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed'
  },
  productPrice:{
    fontFamily:'Avenir',
    color:'red',
  }
})
