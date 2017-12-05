
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, StyleSheet, Image, FlatList,
    ScrollView
} from 'react-native';
import global from '../../../Global/global';
const url = 'http://localhost/api/images/product/';

class CartView extends Component {

    incrQuantity(id){
        global.addQuantity(id);
        console.log(id);
    }
    decrQuantity(id){
        global.subQuantity(id);
    }
    removeCart(id){
        global.removeCart(id);
    }
    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            productStyle, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        const { cartArray } = this.props;
        console.log(cartArray);
        return (
            <View style={wrapper}>
                <FlatList
                data={cartArray}
                renderItem={({item})=>
                <View style={productStyle}>
                <Image source={{ uri: 'https://funnyshopjonah.000webhostapp.com/images/product/54.jpg' }} style={productImage} />
                <View style={mainRight}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={txtName}>{item.phone.name}</Text>
                        <TouchableOpacity onPress={()=>{
                            this.removeCart(item.phone.id);
                        }}>
                            <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={txtPrice}>{item.phone.price}$</Text>
                    </View>
                    <View style={productController}>
                        <View style={numberOfProduct}>
                            <TouchableOpacity onPress={()=>{
                                this.incrQuantity(item.phone.id)
                            }}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity onPress={()=>{
                                this.decrQuantity(item.phone.id);
                            }}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }
            keyExtractor={(item,index)=>item.phone.id}
                />
                <TouchableOpacity>
                    <View style={styles.total}>
                        <Text style={styles.totalValue}>
                            1500$
                            </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
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
        fontSize: 20,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    total: {
        marginBottom: 10,
        marginHorizontal: 5,
        backgroundColor: 'green',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalValue: {
        color: 'white',
        fontSize: 20
    }
});

export default CartView;