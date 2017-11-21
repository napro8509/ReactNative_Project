import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const {height,width} = Dimensions.get('window');
export default class TopProduct extends Component{
  openDetail(){
    const {goToDetail}=this.props;
    goToDetail();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>
          TOP PRODUCT
        </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.productContainer}>
          <TouchableOpacity onPress={this.openDetail.bind(this)}>
          <Image style={styles.image}
            resizeMode="stretch"
          source={{uri:'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}}/>
          <Text style={styles.productName}> TÊN SẢN PHẨM </Text>
          <Text style={styles.productPrice}> GIÁ : 150$ </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.productContainer}>
          <Image style={styles.image}
            resizeMode="stretch"
          source={{uri:'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}}/>
          <Text style={styles.productName}> TÊN SẢN PHẨM </Text>
          <Text style={styles.productPrice}> GIÁ : 150$ </Text>
          </View>
          <View style={styles.productContainer}>
          <Image style={styles.image}
            resizeMode="stretch"
          source={{uri:'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}}/>
          <Text style={styles.productName}> TÊN SẢN PHẨM </Text>
          <Text style={styles.productPrice}> GIÁ : 150$ </Text>
          </View>
          <View style={styles.productContainer}>
          <Image style={styles.image}
            resizeMode="stretch"
          source={{uri:'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'}}/>
          <Text style={styles.productName}> TÊN SẢN PHẨM </Text>
          <Text style={styles.productPrice}> GIÁ : 150$ </Text>
          </View>
        </View>
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
    paddingTop:10
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
    height:(width-50)/2,
    width:(width-50)/2,
  },
  body:{
    marginTop:3,
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap'
  },
  productContainer:{
    width:(width-50)/2,
    shadowColor:'#2E272B',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.2,
    elevation:3,
    backgroundColor:'#FFF',
    marginTop:10
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
