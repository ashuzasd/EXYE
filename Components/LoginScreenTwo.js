import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreenTwo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showOtpContainer, setShowOtpContainer] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigation = useNavigation();
  const otpInputsRefs = useRef([]);

  const handleLogin = () => {
    navigation.navigate('Main')
  }

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    if (text.length >= 10) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = () => {
    console.log('Submit button pressed with phone number:', phoneNumber);
    setShowOtpContainer(true);
  };

  const handleOtpChange = (text, index) => {
    let updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text.length === 1 && index < 5) {
      otpInputsRefs.current[index + 1].focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/Group.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <Button mode="outlined" style={styles.login} labelStyle={styles.btnText}>
          Log In
        </Button>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputTextContainer}>
              <Text style={[styles.label, { fontWeight: 'bold', textAlign: 'Left' }]}>Enter Mobile Number</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="+91 9922389877"
              placeholderTextColor="#8C8C8C"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: isSubmitDisabled ? 'rgba(61, 196, 103, 1)' : 'green' }]}
              onPress={handleSubmit}
              disabled={isSubmitDisabled}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.OrText}>OR</Text>
            <View style={styles.socialContainer}>
              <FontAwesomeIcon icon={faFacebookF} size={24} style={styles.socialIcon} />
              <Text style={styles.socialText}>Continue with Facebook</Text>
            </View>

            <View style={styles.socialContainerTwo}>
              <Image
                source={require('../assets/google.png')}
                style={styles.customGoogleLogo}
              />
              <Text style={styles.socialText}>Continue with Google</Text>
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showOtpContainer}
        onRequestClose={() => setShowOtpContainer(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.otpText}>Enter OTP</Text>
            <View style={styles.otpInputContainer}>
              {Array.from({ length: 6 }).map((_, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={otp[index]}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  ref={(ref) => (otpInputsRefs.current[index] = ref)}
                />
              ))}
            </View>
            <Image
              source={require('../assets/loading.png')}
              style={styles.otpIcon}
            />
            <TouchableOpacity style={styles.verifyButton}>
              <Text style={styles.verifyButtonText} onPress={handleLogin}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF5A5A',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  submitButton: {
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 3,
    alignItems: 'center',
    paddingVertical: 15,
    width: 288,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
  },
  login: {
    top: 100,
    width: "60%",
    borderColor: 'gold',
    borderWidth: 5,
    marginTop: 15,
  },
  btnText: {
    color: 'gold',
    fontSize: 18,
    fontWeight: 'bold',
  },
  OrText: {
    color: 'black',
    paddingTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    width: 348,
    height: 450,
    top: 150,
    left: 5,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'gold',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 109,
    alignItems: 'center',
  },
  inputTextContainer: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 19,
    marginTop: -170,
    marginBottom: 5,
    width: 288, // Width from Figma
    height: 62, // Height from Figma
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 20,
    width: 288, // Width from Figma
    height: 62, // Height from Figma
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    fontSize: 18, // Adjust the size of the entered numbers
    fontWeight: 'bold', // Make the entered numbers bold
  },
  backgroundImage: {
    width: '100%',
    height: '90%',
    position: 'absolute',
    top: 110,
    left: 0,
    resizeMode: 'cover',
    opacity: 0.5,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  socialContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 15,
  },
  socialIcon: {
    color: '#4267B2',
    marginRight: 10,
  },
  customGoogleLogo: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4267B2',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 370,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    top: '30%',
    padding: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  otpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreenTwo;
