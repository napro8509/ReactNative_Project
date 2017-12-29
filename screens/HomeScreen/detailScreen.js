import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

export default class DetailScreen extends Component{
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            XIN CHAO
          </Text>
        </View>
</View>
    );
  }
}
