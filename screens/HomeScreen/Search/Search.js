
import React, { Component } from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
    View, Image, Dimensions, FlatList
} from 'react-native';
import global from '../../../Global/global';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
        };
        global.SearchArray = this.setSearchArray.bind(this);
    }

    setSearchArray(arrProduct) {
        this.setState({ listProduct: arrProduct });
    }

    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        const { navigation } = this.props;
        return (
            <View style={wrapper}>
                <FlatList
                    data={this.state.listProduct}
                    renderItem={({ item }) =>
                        <View style={product}>
                            <Image style={productImage} source={{ uri: 'https://i5.walmartimages.com/asr/20caa881-9f84-478b-8259-b9c3448e1007_1.f85576fe20ee4efe41421c04faaa310f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF' }} />
                            <View style={mainRight}>
                                <Text style={txtName}>Name: {item.name}</Text>
                                <Text style={txtPrice}>Price: {item.price}$</Text>
                                <Text style={txtMaterial}>Material </Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>Color </Text>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'white',
                                            borderRadius: 15,
                                            marginLeft: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={showDetailContainer} onPress={() => {
                                    navigation.navigate('ProductDetail', { id:item.id })
                                }} >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#DFDFDF',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 3,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});