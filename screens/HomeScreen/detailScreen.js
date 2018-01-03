import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

export default class DetailScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
            }}
            resizeMode='cover'
            source={{ uri: 'https://image.freepik.com/free-vector/blue-abstract-background-with-mandalas_1159-956.jpg' }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10,backgroundColor:'white'}}>
        <Image  style={{width:width,height:width*2/3,flex:1}} 
        resizeMode='stretch'
        source={require('../../images/map.png')}/>
        </View>
          <View style={styles.infoContainer}>
            <View style={styles.rowInfoContainer}>
              <Image source={require('../../images/marker.png')} style={styles.imageStyle} />
              <Text style={styles.infoText}>Số 4 đường 41, p. Linh Đông, Q.Thủ Đức, TP.Hồ Chí Minh</Text>
            </View>
            <View style={styles.rowInfoContainer}>
              <Image source={require('../../images/phone_number.png')} style={styles.imageStyle} />
              <Text style={styles.infoText}>(+84) 01665809097</Text>
            </View>
            <View style={styles.rowInfoContainer}>
              <Image source={require('../../images/email.png')} style={styles.imageStyle} />
              <Text style={styles.infoText}>legiona14@gmail.com</Text>
            </View>
            <View style={[styles.rowInfoContainer, { borderBottomWidth: 0 }]}>
              <Image source={require('../../images/fax.png')} style={styles.imageStyle} />
              <Text style={styles.infoText}>(+84) 0838383838</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D6D6D6'
  },
  imageStyle: {
    width: 30,
    height: 30
  },
  infoText: {
    fontFamily: 'Avenir',
    color: '#AE005E',
    fontWeight: '500'
  }
});

