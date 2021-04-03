import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import ExclusiveOffer from './ExclusiveOffer'
import Location from './Location'
import Search from './Search'
import ShopsNear from './ShopsNear'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Location />
                <Search />

                <View style={styles.mainBanner}>
                    <View style={styles.innerBanner}>
                        <Image style={styles.bannerImage} source={require('../../../assets/Images/HomeBanner.png')} />
                    </View>
                </View>

                <ExclusiveOffer />
                <ShopsNear />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainBanner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%'
    },
    innerBanner: {
        width: '93%',
        alignSelf: 'center'
    },
    bannerImage: {
        resizeMode: 'contain',
        width: '100%',
    }
})