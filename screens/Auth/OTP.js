import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Platform, Image } from 'react-native'
import ColorsText from '../../constants/ColorsText'

import OTPInputView from '@twotalltotems/react-native-otp-input'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'
import urls from '../../constants/urls'
import { showMessage } from 'react-native-flash-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Geolocation from 'react-native-geolocation-service';

const OTP = ({ route }) => {
    const { phoneNumber } = route.params
    const navigation = useNavigation();
    const [otpValue, setOtpValue] = useState('');
    const [isForm, setIsForm] = useState(false);
    const [username, setUsername] = useState('');
    const [isError, setIsError] = useState(false);
    const gettingOtpValue = (value) => {
        setOtpValue(value);
        setIsError(false);

        var formdata = new FormData();
        formdata.append("phone", "8635097845");
        formdata.append("otp", "1234");
        formdata.append("device", "app");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${urls.baseURL}${urls.verifyOTP}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                result.success == true ? (showMessage({
                    message: `Successfully Registered..!!`,
                    type: 'success',
                    icon: 'success',
                    floating: true,
                    textStyle: {
                        fontFamily: ColorsText.regular.fontFamily
                    }
                }), setIsForm(true)) : showMessage({
                    message: `Otp doesn't match`,
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

    const handleChange = () => {
        setIsError(false);
        if (username.length > 0) {
            console.warn(username);
            var formdata = new FormData();
            formdata.append("name", username)
            formdata.append("phone", phoneNumber);
            formdata.append("role_id", "1");
            formdata.append("device", "web");

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${urls.baseURL}${urls.signUp}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    result.status == true ? (
                        showMessage({
                            message: `${result?.message}`,
                            type: 'success',
                            icon: 'success',
                            floating: true,
                            textStyle: {
                                fontFamily: ColorsText.regular.fontFamily
                            }
                        }), navigation.navigate('Home')
                    ) : showMessage({
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
                message: `Username is must`,
                type: 'danger',
                icon: 'danger',
                floating: true,
                textStyle: {
                    fontFamily: ColorsText.regular.fontFamily
                }
            })
            setIsError(true);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/Images/OTP.png')} style={{ width: '100%', height: '100%' }} >
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.boxContainer}>
                        <View style={styles.innerboxContainer}>
                            <View style={styles.mainHeading}>
                                <Text style={styles.headingText}>Get your things</Text>
                                <Text style={styles.headingText}>with Delivery</Text>
                            </View>
                            <View style={styles.phoneNumber}>
                                <View style={styles.numberInputView}>
                                    <View style={styles.countryCode}>
                                        <Text style={styles.countryCodeText}>+91</Text>
                                    </View>
                                    <View style={styles.mainInput}>
                                        <TextInput editable={false} style={styles.inputValues} value={phoneNumber} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.otpView}>
                                <View style={styles.innerOtpView}>
                                    <View>
                                        <OTPInputView autoFocusOnLoad codeInputFieldStyle={styles.underlineStyleBase}
                                            codeInputHighlightStyle={styles.underlineStyleHighLighted} style={{ width: '80%', height: 100, }} pinCount={4}
                                            onCodeFilled={(code => {
                                                gettingOtpValue(code)
                                            })} />
                                    </View>
                                    <View></View>
                                </View>
                            </View>
                            {
                                isForm ? <View style={styles.resendOtpView}>
                                    <View style={[styles.innerResendOtpView, { flexDirection: 'row', alignItems: 'center' }]}>
                                        <View style={{ marginRight: 8 }}>
                                            <Image source={require('../../assets/Images/successCheck.png')} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: ColorsText.regular.fontFamily, color: 'green' }}>OTP Verified</Text>
                                        </View>
                                    </View>
                                </View> : <View style={styles.resendOtpView}>
                                        <View style={styles.innerResendOtpView}>
                                            <TouchableOpacity style={styles.resendButton}>
                                                <Text style={styles.resendButtonText}>Resend OTP</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }

                            {
                                isForm ? (<>
                                    <View style={styles.userName}>
                                        <View style={styles.innerUserName}>
                                            <TextInput onChangeText={(e) => setUsername(e)} style={[styles.nameInput, { borderWidth: 0.7, borderColor: isError ? '#CA0B00' : '#fff' }]} placeholder="Your good name.." />
                                        </View>
                                    </View>
                                    <View style={styles.savedBtn}>
                                        <View style={styles.innerSavedBtn}>
                                            <TouchableOpacity onPress={handleChange} style={styles.saveBtnMain}>
                                                <Text style={styles.saveText}>Save</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </>) : null
                            }
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )
}

export default OTP

const styles = StyleSheet.create({
    boxContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
    innerboxContainer: {
        width: '80%',
    },
    mainHeading: {
        marginTop: '30%',
        width: '100%',
    },
    headingText: {
        fontSize: 26,
        fontFamily: ColorsText.regular.fontFamily
    },
    phoneNumber: {
        marginTop: '10%',
        width: '100%',
        backgroundColor: '#fff',
        height: 40,
        justifyContent: 'center',
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
    numberInputView: {
        flexDirection: 'row',
        fontFamily: ColorsText.regular.fontFamily
    },
    countryCode: {
        paddingLeft: 20,
        paddingRight: 10,
        borderRightWidth: 2,
        borderRightColor: '#f1f1f1'
    },
    countryCodeText: {
        fontSize: 18,
        fontFamily: ColorsText.regular.fontFamily
    },
    mainInput: {
        paddingLeft: 10,
        fontFamily: ColorsText.regular.fontFamily
    },
    inputValues: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: ColorsText.regular.fontFamily
    },
    otpView: {
        width: '100%',
        justifyContent: 'center'
    },
    innerOtpView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    underlineStyleBase: {
        width: 50,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#999',
        color: '#000',
        fontSize: 18
    },

    underlineStyleHighLighted: {
        borderColor: '#000',
    },
    resendOtpView: {
        width: '100%',
        justifyContent: 'center'
    },
    innerResendOtpView: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    resendButtonText: {
        fontFamily: ColorsText.Medium.fontFamily
    },



    userName: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8%',
        marginTop: '10%'
    },
    innerUserName: {
        width: '100%',
    },
    nameInput: {
        height: 40,
        backgroundColor: '#fff',
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: ColorsText.regular.fontFamily,
        borderRadius: 6,
        shadowColor: ColorsText.iosShadow.shadowColor,
        shadowOffset: {
            width: ColorsText.iosShadow.shadowOffset.width,
            height: ColorsText.iosShadow.shadowOffset.height,
        },
        shadowOpacity: ColorsText.iosShadow.shadowOpacity,
        shadowRadius: ColorsText.iosShadow.shadowRadius,

        elevation: ColorsText.iosShadow.elevation,
    },
    savedBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsText.primary_color.color,
        // marginTop: '20%',
        borderRadius: 7,
        shadowColor: ColorsText.iosShadow.shadowColor,
        shadowOffset: {
            width: ColorsText.iosShadow.shadowOffset.width,
            height: ColorsText.iosShadow.shadowOffset.height,
        },
        shadowOpacity: ColorsText.iosShadow.shadowOpacity,
        shadowRadius: ColorsText.iosShadow.shadowRadius,

        elevation: ColorsText.iosShadow.elevation,
    },
    innerSavedBtn: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
    },
    saveBtnMain: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveText: {
        fontFamily: ColorsText.Medium.fontFamily,
        fontSize: 16
    }
})
