import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { height } = Dimensions.get('window');
const imageHeight = height * 0.37 * 5 / 6;
const imageWidth = imageHeight * 1.88;
export default class SaleCollection extends Component {
  goToListPhone() {
    const { goToList } = this.props;
    goToList();
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goToListPhone.bind(this)}>
        <View style={styles.collecions}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
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
                source={{ uri: 'https://magiamgia247.net/wp-content/uploads/2017/04/Khuyến-mãi-điện-thoại-giảm-giá-tại-lazada.jpg' }}
                resizeMode="stretch"
                style={{ flex:1, borderRadius: 10 }}
              />
            </View>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  collecions: {
    backgroundColor: 'transparent',
    height: imageHeight,
    marginVertical: 7,
    marginHorizontal: 10,
    marginBottom: 0,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  text: {
    fontSize: 15,
    color: '#183544',
    margin: 5
  }
})
