import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import homeIcon from '../assets/home.png';
import settingsIcon from '../assets/wallet.png';
import notificationIcon from '../assets/notification.png';
import backgroundImage from '../assets/Group.png';
import uppershaper from '../assets/uppershape.png';
import upperLog from '../assets/Upperlogo.png';
import addmoney from '../assets/addmoney.png';
import payment from '../assets/payment.png';
import refericon from '../assets/refericon.png';
import withdrawicon from '../assets/withdrawicon.png';
import transitionhistory from '../assets/transitionhistory.png';

function WalletPage() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('HomeScreen');
    };

    const navigateToPavilion = () => {
        navigation.navigate('PavilionScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={uppershaper} style={styles.uppershape} />
            <Image source={upperLog} style={styles.upperLog} />
            <Image source={backgroundImage} style={styles.backgroundImage} />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={settingsIcon} style={styles.icon} />
                    <Image source={homeIcon} style={styles.icon} />
                    <Image source={notificationIcon} style={styles.icon} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/vectornav.png')} style={styles.image} />
                </View>
            </View>
            <View style={styles.miniContainer}>
                <Text style={styles.miniText}> Current Balance : </Text>
                <Text style={styles.miniTextRupp}> ₹ 108 </Text>
            </View>
            <View style={styles.customContainer}>
                <Image source={addmoney} style={styles.smallIcon} />
                <Text style={styles.iconText}>Add Money</Text>

                <Image source={payment} style={styles.smallIcon} />
                <Text style={styles.iconText}>Method of payment</Text>

                <Image source={transitionhistory} style={styles.smallIcon} />
                <Text style={styles.iconText}>Transaction history</Text>

                <Image source={withdrawicon} style={styles.smallIcon} />
                <Text style={styles.iconText}>Withdraw</Text>

                <Image source={refericon} style={styles.smallIcon} />
                <Text style={styles.iconText}>Refer and Earn</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between', 
    },
    imageContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, 
    },
    upperLog: {
        left: '42%',
        top: '-6%',
        height: 100,
        width: 100,
    },
    image: {
        width: '99%',
        height: 140,
        top: 50,
        resizeMode: 'contain', 
    },
    icon: {
        width: 60,
        height: 60,
        top: '135%',
        zIndex: 1,
        resizeMode: 'contain', 
        marginHorizontal: 30, 
    },
    backgroundImage: {
        position: 'absolute',
        height: 627,
        width: '100%',
        top: 139,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    miniContainer: {
        position: 'absolute',
        width: 214,
        height: 86.86,
        top: 185,
        left: 90,
        borderWidth: 3.95,
        borderColor: 'rgba(239, 90, 90, 1)',
        borderRadius: 30,
        zIndex: 2, 
        backgroundColor: 'rgba(255, 169, 82, 1)',
    },
    customContainer: {
        position: 'absolute',
        top: '65%', 
        left: '50%', 
        width: 329,
        height: 380,
        borderWidth: 2,
        borderColor: 'rgba(217, 217, 217, 1)',
        borderRadius: 10,
        backgroundColor: 'rgba(217, 217, 217, 1)', 
        zIndex: 1,
        transform: [{ translateX: -164.5 }, { translateY: -220 }], 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    smallIcon: {
        width: 37,
        height: 35,
        left: 35,
        top: 25,
        resizeMode: 'contain',
    },
    iconText: {
        color: 'black',
        marginTop: 5,
        fontSize: 22,
        left: 110,
        bottom: 20,
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    uppershape: {
        top: 5,
    },
    miniText: {
        left: 24,
        top: 3,
        color: 'white',
        fontWeight: '600', 
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android
    },
    miniTextRupp: {
        left: 70,
        top: 10,
        color: 'white',
        fontWeight: '600', // Add font weight
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // For Android
    },

});

export default WalletPage;
