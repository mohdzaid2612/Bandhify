import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ColorsText from '../../../constants/ColorsText'
import BoughtTogether from './BoughtTogether'
import { Container, Header, Content, Picker, Form, Icon } from "native-base";

const Cart = () => {

    const cartProducts = [1, 2, 3]
    const [selectedKey, setSelectedKey] = useState('key1');

    const onValueChange = (value) => {
        setSelectedKey(value);
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkoutBtn}>
                <View style={styles.innerCheckoutBtn}>
                    <TouchableOpacity>
                        <Text style={styles.checkoutText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchContainer}>
                    <View style={styles.innerSearchConatiner}>
                        <View style={styles.mapMarker}>
                            <Image source={require('../../../assets/Images/Location.png')} />
                        </View>
                        <View style={styles.Location}>
                            <View style={styles.editBtn}>
                                <Text style={styles.homeText}>Home</Text>
                                <TouchableOpacity>
                                    <View style={styles.editButton}>
                                        <Text style={styles.editText}>Edit</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.fullAddress}>
                                <Text numberOfLines={1} style={styles.fullAddressText}>Bhagyashree Colony, Indore, Madhya Pradesh 452011</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.cartItem}>
                    {
                        cartProducts.map((value) => {
                            return (
                                <View style={styles.innerCartItem}>
                                    <View style={styles.cardInfo}>
                                        <View style={styles.productImage}>
                                            <Image style={styles.imageProduct} source={require('../../../assets/Images/ExclusiveOffer.png')} />
                                        </View>
                                        <View style={styles.productInfo}>
                                            <View style={styles.productName}>
                                                <View>
                                                    <Text numberOfLines={1} style={styles.productNameText}>Cow Milk</Text>
                                                    <Text style={styles.productQuantityFixedText}>1 ltr, Rs. 56.2</Text>
                                                </View>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../../assets/Images/cancelButton.png')} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.productQuantity}>
                                                <View style={styles.changeButton}>
                                                    <TouchableOpacity><Text style={styles.decrease}>-</Text></TouchableOpacity>
                                                    <Text style={styles.changeQuantity}>1</Text>
                                                    <TouchableOpacity><Text style={styles.increase}>+</Text></TouchableOpacity>
                                                </View>
                                                <View style={styles.totalPrice}>
                                                    <Text style={styles.totalPrice}>Rs. 56.2</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View></View>
                                </View>
                            )
                        })
                    }
                </View>

                <BoughtTogether />

                <View style={styles.picker}>
                    <View style={styles.innerPicker}>
                        <Text style={styles.timingsText}>Selec Your Timings</Text>
                        <Content>
                            <Form>
                                <Picker
                                    mode="dialog"
                                    style={{ width: '100%', borderWidth: 1, borderColor: '#f1f1f1' }}
                                    selectedValue={selectedKey}
                                    onValueChange={onValueChange}
                                    iosHeader="Today"
                                    iosIcon={<Icon name="keyboard-arrow-down" type="MaterialIcons" />}
                                    itemTextStyle={{ fontFamily: ColorsText.Medium.fontFamily }}
                                >
                                    <Picker.Item label="10:00AM - 12:00AM" value="key0" />
                                    <Picker.Item label="5:00PM - 8:00PM" value="key1" />
                                </Picker>
                            </Form>
                        </Content>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        paddingBottom: '16%'
    },
    checkoutBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        zIndex: 999
    },
    innerCheckoutBtn: {
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsText.primary_color.color,
        height: 44,
        borderRadius: 10,
        shadowColor: ColorsText.iosShadow.shadowColor,
        shadowOffset: {
            width: ColorsText.iosShadow.shadowOffset.width,
            height: ColorsText.iosShadow.shadowOffset.height,
        },
        shadowOpacity: ColorsText.iosShadow.shadowOpacity,
        shadowRadius: ColorsText.iosShadow.shadowRadius,

        elevation: ColorsText.iosShadow.elevation,
    },
    checkoutText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 16
    },
    searchContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerSearchConatiner: {
        flexDirection: 'row',
        width: '93%',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    mapMarker: {
        width: '5%',
        marginRight: 5,
        marginTop: '1%'
    },
    Location: {
        width: '95%'
    },
    editBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 20
    },
    editButton: {
        padding: 6,
        paddingHorizontal: 14,
        backgroundColor: ColorsText.primary_color.color,
        borderRadius: 6
    },
    editText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 12,
        letterSpacing: 1.2
    },
    fullAddress: {
        width: '100%'
    },
    fullAddressText: {
        fontFamily: ColorsText.light.fontFamily,
        fontSize: 12,
        marginTop: 6
    },
    cartItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%'
    },
    innerCartItem: {
        width: '93%',
        marginBottom: '4%',
        borderBottomWidth: 1,
        paddingBottom: '4%',
        borderBottomColor: '#f2f2f2'
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImage: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    imageProduct: {
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
        minHeight: 100,
    },
    productInfo: {
        width: '70%',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 6
    },
    productName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    changeButton: {
        flexDirection: 'row',
        backgroundColor: ColorsText.primary_color.color,
        width: '40%',
        justifyContent: 'space-between',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    productNameText: {
        fontFamily: ColorsText.Medium.fontFamily,
        fontSize: 16
    },
    productQuantityFixedText: {
        fontFamily: ColorsText.light.fontFamily,
        color: '#7c7c7c',
        fontSize: 13
    },
    increase: {
        fontFamily: ColorsText.regular.fontFamily,
    },
    decrease: {
        fontFamily: ColorsText.regular.fontFamily
    },
    changeQuantity: {
        fontFamily: ColorsText.regular.fontFamily
    },
    totalPrice: {
        fontFamily: ColorsText.Medium.fontFamily,
        fontSize: 18
    },
    picker: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-5%'
    },
    innerPicker: {
        width: '93%'
    },
    timingsText: {
        fontFamily: ColorsText.Medium.fontFamily,
        fontSize: 20,
        marginBottom: 10
    }
})