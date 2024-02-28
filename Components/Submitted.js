import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Submitted = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={require('../assets/Group.png')} style={styles.backgroundImage} />

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* GIF or Image (Replace the source with your GIF/image) */}
        <Image source={require('../assets/celebration1.gif')} style={styles.gifImage} />

        {/* Text */}
        <Text style={styles.text}>Answer Submitted Successfully</Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to pavilion')}>
          <Text style={styles.buttonText}>Going to Pavilion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'Green',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    // backgroundColor: 'rgba(61, 196, 103, 1)',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'rgba(240, 90, 91, 1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Submitted;
