import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleClicked = () => {
        navigation.navigate('LoginTwo');
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = () => {
        if (name && email && mobile) {
            console.log('Submitted');
        } else {
            alert('Please fill in all fields');
        }
    };

    const buttonDisabled = !name || !email || !mobile;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.signuptext}>Sign Up</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your mobile number"
                        keyboardType="numeric"
                        onChangeText={setMobile}
                    />
                </View>
                <TouchableOpacity
                    style={[styles.submitButton, { backgroundColor: buttonDisabled ? 'rgba(61, 196, 103, 1)' : 'green' }]}
                    onPress={handleSubmit}
                    disabled={buttonDisabled}
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.logintext}>Already have an account?</Text>
            <TouchableOpacity>
                <Text style={styles.logintextTwo} onPress={handleClicked}>Log in</Text>
            </TouchableOpacity>
            <Image
                source={require('../assets/Group 29.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EF5A5A',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 110,
        position: 'relative',
    },
    formContainer: {
        width: '80%',
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    logintext: {
        color: 'white',
    },
    logintextTwo: {
        color: 'blue',
    },
    input: {
        backgroundColor: 'rgba(255, 169, 82, 1)',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: 55,
    },

    signuptext: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    submitButton: {
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 15,
        borderWidth:3,
        borderColor:'white',
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        position: 'fixed',
        bottom: 0,
        left: 0,
        top: 60,
        right: 0,
    },
});

export default LoginScreen;
