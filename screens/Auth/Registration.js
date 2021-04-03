import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import ColorsText from '../../constants/ColorsText'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import urls from '../../constants/urls'
import { showMessage } from 'react-native-flash-message'




const Registration = () => {
    const navigation = useNavigation();
    const [showButton, setShowButton] = useState(false);
    const [number, setNumber] = useState('')
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getNumber = () => {
        setIsError(false);
        setErrorMessage('');
        if (number.length == 10) {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "phone": number });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(`${urls.baseURL}${urls.sendOTP}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    result?.success == true ? (showMessage({
                        message: 'OTP sent successflly',
                        type: 'success',
                        icon: 'success',
                        floating: true,
                        textStyle: {
                            fontFamily: ColorsText.regular.fontFamily
                        }
                    }), navigation.replace('OTP', {
                        phoneNumber: number
                    })) : showMessage({
                        message: `${result?.message}`,
                        type: 'danger',
                        icon: 'danger',
                        floating: true,
                        textStyle: {
                            fontFamily: ColorsText.regular.fontFamily
                        }
                    })
                })
                .catch(error => console.log('error', error));

        }
        else {
            showMessage({
                message: `Digits should be 10`,
                type: 'danger',
                icon: 'danger',
                floating: true,
                textStyle: {
                    fontFamily: ColorsText.regular.fontFamily
                }
            })
            setIsError(true);
            setErrorMessage('Digits should be 10');
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ height: '100%', resizeMode: 'cover' }} source={require('../../assets/Images/Splash.png')}>
                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.boxcontainer}>
                            <View style={styles.mainHeading}>
                                <Text style={styles.headingText}>Get your things</Text>
                                <Text style={styles.headingText}>with Delivery</Text>
                            </View>
                            <View style={styles.paraHeading}>
                                <View style={[styles.otpDummy, { borderWidth: 0.8, borderColor: isError ? '#CA0B00' : '#fff' }]}>
                                    <TouchableOpacity style={styles.otpButton}>
                                        <View style={styles.countryCode}>
                                            <Text style={styles.countryCodeText}>+91</Text>
                                        </View>
                                        <View style={styles.phoneNumber}>
                                            <TextInput onChangeText={(e) => setNumber(e)} maxLength={10} keyboardType="number-pad" style={styles.inputValue} placeholder="7417XXXX75"></TextInput>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {
                                    isError ? (
                                        <Text style={{
                                            position: 'absolute',
                                            right: '15%',
                                            bottom: -20,
                                            fontFamily: ColorsText.regular.fontFamily,
                                            color: '#CA0B00'
                                        }}>Digits should be 10</Text>
                                    ) : null
                                }
                            </View>

                            <View style={[styles.buttonArea, { marginTop: '8%' }]}>
                                <TouchableOpacity style={styles.button} onPress={getNumber} >
                                    <Text style={styles.buttonText}>Get Your Otp</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    boxcontainer: {
        position: 'absolute',
        bottom: '22%',
        // left: '50%',
        // right: '50%',
        // transform: [{ translateX: '-50%' }],
        width: '100%',
        zIndex: 999,
        flex: 1
    },
    mainHeading: {
        width: '70%',
        alignSelf: 'center'
    },
    headingText: {
        fontSize: 28,
        fontWeight: '500',
        // fontFamily: 'SpaceGrotesk-Light'
        fontFamily: ColorsText.regular.fontFamily
    },
    paraHeading: {
        alignItems: 'center',
        marginTop: '5%',
    },
    paraText: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: ColorsText.light.fontFamily
    },
    otpDummy: {
        backgroundColor: '#fff',
        width: '70%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 999,

        // alignItems: 'center'
    },
    otpButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    countryCode: {
        paddingLeft: 20,
        paddingRight: 10,
        borderRightWidth: 2,
        borderRightColor: '#f1f1f1'
    },
    countryCodeText: {
        fontSize: 18,
        fontFamily: ColorsText.light.fontFamily
    },
    buttonArea: {
        alignItems: 'center',
        marginTop: '15%'
    },
    phoneNumber: {
        paddingLeft: 10,
    },
    inputValue: {
        fontSize: 18,
    },
    moreOption: {
        width: '70%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    moreText: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: ColorsText.light.fontFamily
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
        fontSize: 16,
        fontFamily: ColorsText.regular.fontFamily
    }
})