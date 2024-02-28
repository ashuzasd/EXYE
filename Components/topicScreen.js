import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';
import uppershaper from '../assets/uppershape.png';
import backgroundImage from '../assets/Group.png'; // Import backgroundImage separately
import { useNavigation } from '@react-navigation/native';

const TopicScreen = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const  navigation = useNavigation();

    const handleSubmit =() =>{
        navigation.navigate('waiting')
    }
   // Dummy data for cards
    const data = [
        { id: 1, title: 'Environment', subtext:'This topic will include question of various Floras and Faunas around us. ', image: require('../assets/peacock.png') },
        { id: 2, title: 'India', subtext:'This topic will include question of various events and people of India. ', image: require('../assets/internationalAff.png') },
        { id: 3, title: 'Sport', subtext:'This topic will include question on sport and athletics. ' , image: require('../assets/peacock.png') },
        { id: 4, title: 'world', subtext:'This topic will include question on various events and people around the globe.' , image: require('../assets/peacock.png') },
        { id: 5, title: 'world', subtext:'This topic will include question on various events and people around the globe.' , image: require('../assets/peacock.png') },
        { id: 6, title: 'world', subtext:'This topic will include question on various events and people around the globe.' , image: require('../assets/peacock.png') },
        // Add more cards as needed
    ];

    const toggleCardSelection = (id) => {
        setSelectedCard(selectedCard === id ? null : id);
    };

    // Function to render a row of cards
    const renderCardRow = (startIndex) => (
        <View style={styles.cardRow} key={startIndex}>
            {data.slice(startIndex, startIndex + 2).map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[styles.card, selectedCard === item.id && styles.selectedCard]}
                    onPress={() => toggleCardSelection(item.id)}
                >
                    <Card.Cover source={item.image} style={styles.cardImage} />
                    <Card.Title title={item.title} titleStyle={styles.cardTitle} />
                    <Text style={styles.cardDescription}>{item.subtext}</Text> 
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Image source={backgroundImage} style={styles.backgroundImage} />
            <Image source={uppershaper} style={styles.uppershape} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    {[0, 2].map((startIndex) => renderCardRow(startIndex))}
                </View>
            </ScrollView>
            <View style={styles.floatButtonContainer}>
                <TouchableOpacity style={styles.floatButton} onPress={handleSubmit}>
                    <Text style={styles.floatButtonText}>select topic and scroll down</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 169, 82, 1)',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    uppershape: {
        position: 'absolute',
        top: 0,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        paddingTop: 140,
        paddingBottom: 200, // Adjust the padding to accommodate the floating button
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    card: {
        width: 160,
        height: 240,
        backgroundColor:'rgba(254, 255, 223, 1)',
        borderColor: 'rgba(254, 255, 223, 1)',
        margin: 15,
        elevation: 4,
    },
    selectedCard: {
        backgroundColor: 'rgba(67, 163, 99, 1)',
    },
    cardDescription: {
        fontFamily: 'Poppins',
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.1,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
        top: -10,
        paddingBottom: 20,
    },
    cardImage: {
        width: 110,
        height: 120,
        alignContent: 'center',
        alignSelf: 'center',
        top: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 22.5,
        letterSpacing: 0.2,
        textAlign: 'center',
        color: 'rgba(239, 90, 90, 1)',
    },
    floatButtonContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    floatButton: {
        backgroundColor: 'rgba(240, 90, 91, 1)',
        borderRadius: 30,
        width: 260,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderBlockColor:'rgba(255, 255, 223, 1)'
    },
    floatButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TopicScreen;
