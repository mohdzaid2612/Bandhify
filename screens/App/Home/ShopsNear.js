import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import ColorsText from '../../../constants/ColorsText';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const ShopsNear = () => {

    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.shopCard} onPress={() => navigation.navigate('DairyDetais')}>
                <View style={styles.innerShopCard}>
                    <View style={styles.shopimage}>
                        <Image style={styles.imageShop} source={require('../../../assets/Images/NearShop.png')} />
                    </View>
                    <View style={styles.shopContent}>
                        <View style={styles.shopNameinfo}>
                            <View style={{ width: '85%' }}>
                                <Text numberOfLines={1} style={styles.shopNameText}>Dairy Name</Text>
                            </View>
                            <View style={styles.saveLater}>
                                <Image style={styles.saveLaterImage} source={require('../../../assets/Images/SaveLater.png')} />
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
                                <Image source={require('../../../assets/Images/OfferStar.png')} />
                                <Text style={styles.offerText}>Flat 10% Off</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainShopNear}>
            <View style={styles.innerShopNear}>
                <View style={styles.shopNearHeading}>
                    <Text style={styles.shopNearText}>Shops Near</Text>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                </View>
            </View>
        </View>
    )
}

export default ShopsNear

const styles = StyleSheet.create({
    mainShopNear: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%'
    },
    innerShopNear: {
        width: '93%'
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
        borderColor: '#cccccc',
        borderWidth: 0.5
    },
    shopimage: {
        width: '26.5%',
        height: '100%',
        borderRadius: 18,
        overflow: 'hidden',
        justifyContent: 'flex-start'
    },
    imageShop: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 18
    },
    shopContent: {
        width: '73.5%',
        padding: 10
    },
    shopNameinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    shopNameText: {
        fontSize: 17,
        fontFamily: ColorsText.Medium.fontFamily,
        width: '90%'
    },
    saveLater: {
        marginRight: 8,
        width: 24,
        height: 24,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
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
        marginTop: 4
    },
    shopLocationText: {
        width: '100%',
        fontSize: 14,
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
        width: '55%',
        backgroundColor: ColorsText.primary_color.color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        height: 20,
        flexDirection: 'row'
    },
    offerText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
        fontFamily: ColorsText.Medium.fontFamily
    }
})