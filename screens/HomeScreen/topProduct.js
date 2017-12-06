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
                  source={{ uri: 'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF' }} />
                <Text style={styles.productName}> {item.name} </Text>
                <Text style={styles.productPrice}> Price : {item.price}$ </Text>
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
    shadowOpacity:0.2,
    elevation:3,
    paddingBottom:10,
    paddingTop:10,
  },
  titleContainer:{
    backgroundColor:'white',
    height:30,
    justifyContent:'center',
    paddingLeft:10,
  },
  title:{
    color:'black',
    fontSize:15,
    fontFamily:'Avenir',
    fontWeight:'bold'
  },
  image:{
    height:(width-70)/2,
    width:(width-50)/2,
    marginVertical:10
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
    borderRadius:5
  },
  productName:{
    marginLeft:10,
    fontFamily:'Avenir',
    color:'#D3D3CF',
    fontWeight:'500'
  },
  productPrice:{
    marginLeft:10,
    fontFamily:'Avenir',
    color:'#662F90',
  }
})
