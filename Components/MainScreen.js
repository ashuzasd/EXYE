import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
    const [value, setValue] = React.useState('10');
    const navigation = useNavigation();

    const handleTopic = () => {
        navigation.navigate('Topic')
    }
    const handleWalletNavigation = () => {
        navigation.navigate('Wallet'); // Navigate to the Wallet screen
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Left side text */}
                <Image source={require('../assets/Avarats.png')} style={styles.rightImage} />
                <Text style={styles.leftText}>EXYE</Text>
                {/* Avatar image */}
                <Image source={require('../assets/Rectangle.png')} style={styles.image} />
                {/* Right side image */}
                <Image source={require('../assets/Bars.png')} style={styles.barImage} />
            </View>
            <Image
                source={require('../assets/Group.png')}
                style={styles.backgroundImage}
            />
            <View style={styles.centerContainer} >
                <Text style={styles.timerText}>Next quiz in 00:00</Text>
                <Image source={require('../assets/timer.png')} style={styles.timerImage} />
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.secondText}>Choose amount for participation</Text>
                <View style={styles.radioButtonContainer}>
                    {[10, 20, 30, 40, 50, 60, 70, 80].map((amount, index) => (
                        <View key={index} style={styles.radioButton}>
                            <RadioButton
                                value={amount.toString()}
                                status={value === amount.toString() ? 'checked' : 'unchecked'}
                                onPress={() => setValue(amount.toString())}
                                color="red"
                                uncheckedColor="black"
                            />
                            <Text style={styles.radioButtonText}>₹{amount}</Text>

                        </View>
                    ))}
                </View>
            </View>
            <LinearGradient
                colors={['rgba(255, 169, 82, 1)', 'rgba(240, 90, 91, 1)']}
                style={styles.eventContainer}
                start={[0, 0]}
                end={[1, 1]}
            >
                {/* Content of the event container */}
                <Text style={styles.liveText}>Live</Text>
                <Text style={styles.liveContests}>Contests</Text>
                <Image source={require("../assets/eventPic.png")} style={styles.eventPic} />
            </LinearGradient>
            <View style={styles.DemoContainer}>
                <Text style={styles.DemoConText}>Demo contest</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={handleTopic}>SUBMIT</Text>

            </TouchableOpacity>
            <View>
                {/* <Image source={require('../assets/MainScreen.js')} /> */}
            </View>

            <TouchableOpacity onPress={() => {/* Handle onPress event */ }} style={styles.xyz}>
                <Image source={require("../assets/filledHome.png")} style={styles.bottomNavIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWalletNavigation} style={styles.WalletIcon}>
                <Image source={require("../assets/unfilledWallet.png")} style={styles.bottomNavIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {/* Handle onPress event */ }} style={styles.NotificationIcon}>
                <Image source={require("../assets/notification.png")} style={styles.bottomNavIcons} />
            </TouchableOpacity>
            <Image source={require("../assets/BottomNav.png")} style={styles.bottomNav} />


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%', 
        height: 90, 
    },
    xyz: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        height: 70,
        width: 70,
        left: '35%',
    },
    WalletIcon: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        height: 70,
        width: 70,
        left: '1%',
    },
    NotificationIcon: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        height: 70,
        width: 70,
        right: '10%',
    },
    bottomNavIcons: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        height: 70,
        width: 70,
        left: '40%',
    },
    buttonContainer: {
        width: 190,
        height: 63,
        position: 'absolute',
        top: 690,
        left: 91,
        borderRadius: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#cfe3d4',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    DemoContainer: {
        width: 335,
        height: 60,
        position: 'absolute',
        top: '77.5%', // Center vertically
        left: '50%', // Center horizontally
        marginLeft: -167.5, // Adjust for half of the width
        marginTop: -30, // Adjust for half of the height
        backgroundColor: 'rgba(255, 255, 223, 1)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#cfe3d4',
    },
    DemoConText: {
        alignContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 32.84,
        left: 70,
        top: 10,
        color: 'rgba(255, 169, 82, 1)',
    },
    eventContainer: {
        width: 335,
        height: 180,
        position: 'absolute',
        top: '62%',
        left: '50%',
        marginLeft: -167.5,
        marginTop: -90,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,

    },
    eventPic: {
        left: 160,
        top: -60,
    },
    liveContests: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 27.98,
        lineHeight: 41.96,
        letterSpacing: 0.15,
        top: 40,
        color: 'rgba(255, 255, 255, 1)',
    },
    liveText: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 25.31,
        lineHeight: 37.97,
        top: 40,
        letterSpacing: 0.15,
        color: 'rgba(255, 255, 255, 1)',
    },
    secondText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 32.84,
        left: 1,
        color: 'rgba(255, 255, 255, 1)',
    },
    imageContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 413,
        height: 150,
        top: -30,
        left: -11,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 169, 82, 1)',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        top: 150,
        left: 0,
        resizeMode: 'cover',
        opacity: 0.9,
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 30,
    },
    leftText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 55,
        left: 50,
        top: 30,
    },
    barImage: {
        height: 40,
        width: 40,
        top: 35,
        right: 20,
    },
    rightImage: {
        width: 55,
        height: 55,
        top: 30,
        resizeMode: 'cover',
    },
    centerContainer: {
        width: 335,
        height: 60,
        position: 'absolute',
        top: 160, // Center vertically
        left: '50%', // Center horizontally
        marginLeft: -167.5, // Adjust for half of the width
        marginTop: -30, // Adjust for half of the height
        backgroundColor: 'rgba(239, 90, 90, 1)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
    },
    secondContainer: {
        width: 335,
        minHeight: 192,
        position: 'absolute',
        top: '37%',
        left: '50%', // Center horizontally
        marginLeft: -167.5, // Adjust for half of the width
        marginTop: -96, // Adjust for half of the height
        backgroundColor: 'rgba(255, 169, 82, 1)',
        shadowColor: '#000',
        borderColor: 'white',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 30,
        paddingHorizontal: 20,
        borderWidth: 1,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
    },
    radioButtonText: {
        fontSize: 16,
        marginRight: 8,
    },
    timerText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 28,
        color: 'white',
        textAlignVertical: 'center',
        lineHeight: 30,
        alignContent: 'center',
        left: 10,
        top: 15,
    },
    timerImage: {
        flexDirection: 'row',
        marginLeft: '82%',
        bottom: 24,
    },
});

export default MainScreen;
