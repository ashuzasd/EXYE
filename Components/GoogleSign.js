import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GoogleSign({promptAsync}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> promptAsync ()}>
        <Text style={styles.buttonText}>Sign In with Google ok</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
