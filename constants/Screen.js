import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Registration from '../screens/Auth/Registration';
import ColorsText from './ColorsText';
import OTP from '../screens/Auth/OTP';
import HomeScreen from '../screens/App/Home/HomeScreen';
import Cart from '../screens/App/Cart/Cart';
import Profile from '../screens/App/Profile/Profile';

import AntDesign from 'react-native-vector-icons/AntDesign'
import DairyDetail from '../screens/App/Home/DairyDetails/DairyDetail';

import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service'


const SplashScreen = () => {
    const navigation = useNavigation();

    const onStarted = () => {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then(res => {
                console.log(res)
                // switch (res) {
                if (res === RESULTS.GRANTED) {
                    console.log('yoooooo')
                    // Geolocation.getCurrentPosition(geoSuccess, geoFailure, {
                    //     enableHighAccuracy: true
                    // })

                }

                if (res == RESULTS.BLOCKED)
                    console.log('blocked')

                if (res == RESULTS.DENIED)
                    console.log('denied')

                if (res == RESULTS.LIMITED)
                    console.log('limited')

                if (res == RESULTS.UNAVAILABLE)
                    console.log('unavailable')

                // }
            })
    }

    const geoSuccess = position => {
        console.log(position)
    }

    const geoFailure = err => {
        console.log(err, 'here')
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../assets/Images/Splash.png')}>
                <View style={styles.boxcontainer}>
                    <View style={styles.mainHeading}>
                        <Text style={styles.headingText}>Welcome to</Text>
                        <Text style={styles.headingText}>Bhandify</Text>
                    </View>
                    <View style={styles.paraHeading}>
                        <Text style={styles.paraText}>In nec viverra.</Text>
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.button} onPress={onStarted} >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={
            {
                tabStyle: { backgroundColor: ColorsText.primary_color.color },
                showLabel: false
            }
        }>
            <Tab.Screen options={{
                title: 'Home', tabBarIcon: ({ focused, color, size }) => {
                    return (
                        focused ? <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2 }}><Image source={require('../assets/Images/Home.png')} style={{ tintColor: '#000000', width: '20%', height: '50%', resizeMode: 'contain' }} /></View> : <Image source={require('../assets/Images/Home.png')} style={{ width: '20%', height: '50%', resizeMode: 'contain', tintColor: '#939393' }} />
                    )
                },

            }} name="HomeScreen" component={HomeScreen} />
            <Tab.Screen options={{
                title: 'Cart', tabBarIcon: ({ focused, color, size }) => {
                    return (
                        focused ? <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2 }}><Image source={require('../assets/Images/Cart.png')} style={{ width: '20%', height: '50%', resizeMode: 'contain', tintColor: '#000000' }} /></View> : <Image source={require('../assets/Images/Cart.png')} style={{ width: '20%', height: '50%', resizeMode: 'contain', tintColor: '#939393' }} />
                    )
                },
            }} name="CartScreen" component={Cart} />
            <Tab.Screen options={{
                title: 'Profile', tabBarIcon: ({ focused, color, size }) => {
                    return (
                        focused ? <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2 }}><Image source={require('../assets/Images/Profile.png')} style={{ tintColor: '#000000', width: '20%', height: '50%', resizeMode: 'contain' }} /></View> : <Image source={require('../assets/Images/Profile.png')} style={{ width: '20%', height: '50%', resizeMode: 'contain', tintColor: '#939393' }} />
                    )
                },
            }} name="ProfileScreen" component={Profile} />
        </Tab.Navigator>
    )
}


export default function Screen() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen initialParams name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DairyDetais" component={DairyDetail} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    boxcontainer: {
        position: 'absolute',
        bottom: '18%',
        // left: '50%',
        // right: '50%',
        // transform: [{ translateX: '-50%' }],
        width: '100%',
    },
    mainHeading: {
        width: '100%',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 42,
        fontWeight: '600',
        fontFamily: ColorsText.regular.fontFamily
    },
    paraHeading: {
        alignItems: 'center',
        marginTop: '5%'
    },
    paraText: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: ColorsText.light.fontFamily
    },
    buttonArea: {
        alignItems: 'center',
        marginTop: '15%'
    },
    button: {
        width: '70%',
        backgroundColor: ColorsText.primary_color.color,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
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
    buttonText: {
        fontSize: 18,
        fontFamily: ColorsText.regular.fontFamily
    }
})