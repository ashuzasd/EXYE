import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slide1',
    title: 'Welcome to My Quiz App',
    text: 'Get ready to experience the ultimate quiz challenge!',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'slide2',
    title: 'Test Your Knowledge',
    text: 'Answer questions across various categories.',
    backgroundColor: '#febe29',
  },
  {
    key: 'slide3',
    title: 'Compete with Friends',
    text: 'Challenge your friends and see who knows more!',
    backgroundColor: '#22bcb5',
  },
];

const IntroSlider = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => console.log('Done')}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default IntroSlider;
