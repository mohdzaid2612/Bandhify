import { Icon } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Location from '../Location'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ColorsText from '../../../../constants/ColorsText'
import BoughtTogether from '../../Cart/BoughtTogether'

const DairyDetail = () => {
    const navigation = useNavigation();
    const productArray = [
        {
            selected: false,
            id: 1
        },
        {
            selected: false,
            id: 2
        },
        {
            selected: false,
            id: 3
        },
        {
            selected: false,
            id: 4
        },
        {
            selected: false,
            id: 5
        },
        {
            selected: false,
            id: 6
        },
        {
            selected: false,
            id: 7
        },
        {
            selected: false,
            id: 8
        },
    ]
    const [arr, setArr] = useState(productArray)


    const [changeBtn, setChangeBtn] = useState(false);


    const addtoCart = (id) => {

        for (var i in productArray) {
            if (productArray[i].id == id) {
                setChangeBtn(true)
                productArray[i].selected = true;
                setArr(productArray)
            }
        }
    }

    return (
        <View style={styles.container}>
            {
                changeBtn ? <View style={styles.proceedBtn}>
                    <View style={styles.innerProceedButton}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.proceedText}>Proceed to Cart</Text>
                            <Image style={[styles.proceedCart, { height: 20, resizeMode: 'contain', marginLeft: 10, tintColor: '#000' }]} source={require('../../../../assets/Images/Cart.png')} />
                        </TouchableOpacity>
                    </View>
                </View> : null
            }
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.backContainer}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
                            <Icon style={styles.backBtn} name="left" type="AntDesign" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Location />

                <View style={styles.shopBanner}>
                    <Image style={styles.shopBannerImage} source={require('../../../../assets/Images/ShopBanner.png')} />
                </View>

                <View style={styles.dairyDetails}>
                    <View style={styles.innerDairyDetails}>
                        <TouchableOpacity style={styles.shopCard} onPress={() => navigation.navigate('DairyDetais')}>
                            <View style={styles.innerShopCard}>
                                <View style={styles.shopContent}>
                                    <View style={styles.shopNameinfo}>
                                        <View style={{ width: '85%' }}>
                                            <Text numberOfLines={1} style={styles.shopNameText}>Dairy Name</Text>
                                        </View>
                                        <View style={styles.saveLater}>
                                            <Image style={styles.saveLaterImage} source={require('../../../../assets/Images/SaveLater.png')} />
                                        </View>
                                    </View>
                                    <View style={styles.ratingView}>
                                        <View style={styles.innerRating}>
                                            <View style={styles.allStars}>
                                                <AntDesign style={styles.starRating} name="star" size={12} />
                                                <AntDesign style={styles.starRating} name="star" size={12} />
                                                <AntDesign style={styles.starRating} name="star" size={12} />
                                                <AntDesign style={styles.starRating} name="star" size={12} />
                                                <AntDesign style={styles.starRating} name="star" size={12} />
                                            </View>
                                            <View style={styles.ratingValue}>
                                                <Text style={styles.rateValue}>4.5</Text>
                                                <Text style={styles.totalValue}>/ 5.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.shopLocation}>
                                        <Text numberOfLines={1} style={styles.shopLocationText}>Near Saket</Text>
                                    </View>
                                    <View style={styles.offerCard}>
                                        <View style={styles.innerOfferCard}>

                                            <Text style={styles.offerText}>Flat 10% Off</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <BoughtTogether />

                <View style={styles.dairyProducts}>
                    <View style={styles.productHeading}>
                        <Text style={styles.productText}>Products</Text>
                    </View>
                    <View style={{ alignSelf: 'center', }}>
                        <FlatList

                            numColumns={2}
                            data={arr}
                            extraData={arr}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.dairyProductCard}>
                                        <View style={styles.imageProduct}>
                                            <Image style={styles.productimage} source={require('../../../../assets/Images/ExclusiveOffer.png')} />
                                        </View>
                                        <View style={styles.productContent}>
                                            <View style={styles.innerProductontent}>
                                                <Text numberOfLines={1} style={styles.productName}>Full Cream Milk</Text>
                                                <Text style={styles.productQuantity}>1 litre</Text>
                                            </View>
                                            <View style={styles.productQuantityPrice}>
                                                <Text style={styles.fixedPrice}>Rs. 52</Text>
                                                {
                                                    item?.selected ? <View style={styles.addButton}>
                                                        <TouchableOpacity>
                                                            <Text>-</Text>
                                                        </TouchableOpacity>
                                                        <Text>1</Text>
                                                        <TouchableOpacity>
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                    </View> : <TouchableOpacity onPress={() => addtoCart(item?.id)} style={styles.addButton}>
                                                            <Text>Add</Text>
                                                        </TouchableOpacity>
                                                }


                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DairyDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    proceedBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '2%',
        zIndex: 999
    },
    innerProceedButton: {
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsText.primary_color.color,
        height: 45,
        borderRadius: 999,
        shadowColor: ColorsText.iosShadow.shadowColor,
        shadowOffset: {
            width: ColorsText.iosShadow.shadowOffset.width,
            height: ColorsText.iosShadow.shadowOffset.height,
        },
        shadowOpacity: ColorsText.iosShadow.shadowOpacity,
        shadowRadius: ColorsText.iosShadow.shadowRadius,

        elevation: ColorsText.iosShadow.elevation,
    },
    proceedText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 18
    },
    backContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%'
    },
    innerContainer: {
        width: '93%',
    },
    backButton: {
        width: '20%',
    },
    backBtn: {
        fontSize: 20
    },
    shopBanner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%'
    },
    shopBannerImage: {
        width: '100%',
        resizeMode: 'cover'
    },


    dairyDetails: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%',

    },
    innerDairyDetails: {
        width: '93%',
        borderColor: '#cccccc',
        // borderWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingBottom: '2%'
    },
    shopNearText: {
        fontSize: 20,
        fontFamily: ColorsText.Medium.fontFamily
    },
    shopCard: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    },
    innerShopCard: {
        width: '100%',
        flexDirection: 'row',
        height: 120,
        borderRadius: 18,
        // borderColor: '#cccccc',
        // borderWidth: 0.5,
    },
    shopContent: {
        width: '100%',
        padding: 10
    },
    shopNameinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    shopNameText: {
        fontSize: 18,
        fontFamily: ColorsText.regular.fontFamily,
        width: '90%'
    },
    saveLater: {
        marginRight: 8,
        width: 28,
        height: 28,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: ColorsText.primary_color.color
    },
    saveLaterImage: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },

    ratingView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,

    },
    innerRating: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    allStars: {
        flexDirection: 'row'
    },
    starRating: {
        marginRight: 4,
        color: ColorsText.primary_color.color
    },
    ratingValue: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    rateValue: {
        marginRight: 2,
        fontFamily: ColorsText.Medium.fontFamily
    },
    totalValue: {
        marginLeft: 2,
        fontWeight: '200',
        fontFamily: ColorsText.light.fontFamily
    },
    shopLocation: {
        marginTop: 6
    },
    shopLocationText: {
        width: '100%',
        fontSize: 12,
        color: '#717171',
        fontFamily: ColorsText.light.fontFamily
    },
    offerCard: {
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '3%'
    },
    innerOfferCard: {
        width: '30%',
        backgroundColor: ColorsText.primary_color.color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 35,
        flexDirection: 'row'
    },
    offerText: {
        fontSize: 12,
        marginLeft: 4,
        fontFamily: ColorsText.regular.fontFamily
    },


    dairyProducts: {
        margin: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
        paddingTop: '8%'
    },
    productHeading: {
        position: 'absolute',
        top: 0,
        left: 20,
    },
    productText: {
        fontFamily: ColorsText.Medium.fontFamily,
        fontSize: 20,
    },
    dairyProductCard: {
        width: '45%',
        margin: 5,
        borderRadius: 18,
        borderWidth: 0.5,
        borderColor: '#CCCCCC',
        alignSelf: 'center'
    },
    imageProduct: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        overflow: 'hidden'
    },
    productimage: {
        width: '100%',
        resizeMode: 'cover',
    },
    productContent: {
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 12
    },
    innerProductontent: {
        width: '93%',
    },
    productName: {
        fontWeight: '600',
        width: '100%'
    },
    productQuantity: {
        fontWeight: '200',
        marginTop: 6
    },
    productQuantityPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    fixedPrice: {
        fontSize: 16,
        fontFamily: ColorsText.Medium.fontFamily
    },
    addButton: {
        backgroundColor: ColorsText.primary_color.color,
        width: '50%',
        paddingVertical: 6,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
