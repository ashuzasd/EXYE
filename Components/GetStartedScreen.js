import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
      navigation.navigate('Login'); 
    };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/exye_logo.png')} style={styles.logo} />
      <Text style={styles.maintext} >EXYE Present</Text>
      <Text style={styles.slogan}>Challenge your brain with our quiz game!</Text>
      <Button icon="loading" mode="elevated" onPress={handleGetStarted} style={styles.butn}>
        Get Started
      </Button>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEFFDF',
  },
  maintext :{
    fontSize:20,
    fontWeight:'bold',
    
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  slogan: {
    fontSize: 15,
    textAlign: 'center',
    color:'black',
    fontWeight:'500',
    paddingTop:'3%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  butn:{
    marginTop: '10%'
  }
});

export default GetStartedScreen;
