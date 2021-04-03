import { Icon } from 'native-base'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ColorsText from '../../../constants/ColorsText'

import OrderIcon from '../../../assets/Images/OrderIcon.png'
import MyDetail from '../../../assets/Images/MyDetail.png'
import DeliveryAddress from '../../../assets/Images/DeliveryAddress.png'
import PaymentMethod from '../../../assets/Images/PaymentMethod.png'
import PromoCode from '../../../assets/Images/PromoCode.png'
import NotificationIcon from '../../../assets/Images/NotificationIcon.png'
import HelpIcon from '../../../assets/Images/HelpIcon.png'
import AboutIcon from '../../../assets/Images/AboutIcon.png'

const Profile = () => {

    const arr = [
        {
            image: OrderIcon,
            title: 'Orders'
        },
        {
            image: MyDetail,
            title: 'My Details'
        },
        {
            image: DeliveryAddress,
            title: 'Delivery Address'
        },
        {
            image: PaymentMethod,
            title: 'Payment Methods'
        },
        {
            image: PromoCode,
            title: 'Promo Code'
        },
        {
            image: NotificationIcon,
            title: 'Notifications '
        },
        {
            image: HelpIcon,
            title: 'Help'
        },
        {
            image: AboutIcon,
            title: 'About'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.logoutBtn}>
                <TouchableOpacity style={styles.innerlogoutBtn}>
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.profileInfo}>
                    <View style={styles.innerProfileInfo}>
                        <View style={styles.userImage}>
                            <Image style={styles.userProfileImage} source={require('../../../assets/Images/userImage.png')} />
                        </View>
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>Nova Def</Text>
                            <Text style={styles.userEmail}>Imshuvo97@gmail.com</Text>
                        </View>
                    </View>
                </View>

                {
                    arr.map((value, index) => {
                        const icon = value.image
                        // const iconValue = Image.resolveAssetSource(icon).uri
                        return (
                            <TouchableOpacity style={[styles.moreButton, { borderTopWidth: index == 0 ? 1 : 0 }]}>
                                <View style={styles.innerButton}>
                                    <View style={styles.buttonLeft}>
                                        <View style={styles.buttonIcon}>
                                            <Image source={value.image} />
                                        </View>
                                        <View style={styles.buttonType}>
                                            <Text style={styles.buttonText}>{value.title}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Icon style={styles.iconSize} name="arrow-forward-ios" type="MaterialIcons" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    logoutBtn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '5%'
    },
    profileInfo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '6%'
    },
    innerProfileInfo: {
        width: '93%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 2,
        marginRight: 10,
        overflow: 'hidden',
        borderColor: ColorsText.primary_color.color
    },
    userProfileImage: {
        resizeMode: 'contain',
        width: '100%'
    },
    userName: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 22
    },
    userEmail: {
        fontFamily: ColorsText.light.fontFamily,
        fontSize: 14,
        color: '#7c7c7c'
    },
    moreButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
    },
    innerButton: {
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonType: {
        marginLeft: 15
    },
    buttonText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 18
    },
    iconSize: {
        fontSize: 19
    },
    innerlogoutBtn: {
        width: '93%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EB5757',
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
    logoutText: {
        fontFamily: ColorsText.regular.fontFamily,
        fontSize: 17,
        color: '#fff'
    }
})