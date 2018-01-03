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

const { height } = Dimensions.get('window');
const imageHeight = height * 0.45 * 5 / 6;
const imageWidth = imageHeight * 1.45;

const url = 'https://funnyshopjonah.000webhostapp.com/images/type/';
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [{ id: 1 }, { id: 2 }]
    }
  }
  componentDidMount() {
    fetch("https://funnyshopjonah.000webhostapp.com")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          { array: responseJson.type }
        );
      })
  }
  render() {
    const { navigation } = this.props;
    const getList =

      (
        <Swiper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          loop={true}
          showsButtons={true}
        >
          {
            this.state.array.map((data, i) => {
              return (
                <TouchableOpacity key={data.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    const { goToList } = this.props;
                    goToList(data.id);
                  }}
                >
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}>

                    <View>
                      <Image source={{ uri: `${url}${data.image}` }}
                        style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }}
                        resizeMode='stretch'
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', alignContent: 'flex-end' }}
                  >
                    <Text
                      style={{
                        textAlign: 'right',
                        fontSize: 30,
                        color: '#FFF',
                        fontStyle: 'italic'
                      }}
                    >
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </Swiper>
      )
    return (
      <View style={styles.collecions}>

        <View style={{ flex: 5 }}>
          {getList}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  collecions: {
    backgroundColor: 'transparent',
    height: height * 0.37,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  text: {
    fontSize: 15,
    color: '#183544',
    margin: 5,
    fontFamily: 'Avenir'
  },

})