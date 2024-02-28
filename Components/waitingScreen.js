import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import backgroundImage from '../assets/Group.png';
import gifImage from '../assets/waitingsystem.gif';

const WaitingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const delay = 6000; 
    const timeoutId = setTimeout(() => {
      navigation.navigate("Question"); 
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <View style={styles.gifContainer}> 
          <Image source={gifImage} style={styles.gif} />
        </View>
        <Image
          source={require("../assets/k.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 110,
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 302,
    width: 259,
    position: "absolute",
    bottom: 0,
  },
  backgroundImage: {
    bottom: 50,
  },
  gifContainer: {
    position: "absolute",
    top: height * 0.25, // 25% from the top
    left: (width - 100) / 2, // Center horizontally
  },
  gif: {
    width: 100, 
    height: 100, 
  },
});

export default WaitingScreen;
