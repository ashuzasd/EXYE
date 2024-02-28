import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Shape from "../assets/cloud2.png";
import Brain from "../assets/question.png";
import BottomShape from '../assets/Elements-organic-shape-line-dash-3.png'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const QuestionScreen = () => {
  const options = [
    "Narasimha Rao",
    "Atalji Vajpayee",
    "Rahulji Gandhi",
    "Narendra Modi",
  ];
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setError(null); 
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setError("Please select an option");
      setModalVisible(true); // Show the modal
      return; // Exit the function if no option is selected
    }
    console.log("Selected Option:", selectedOption);
    navigation.navigate("submit");
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <Image source={Shape} style={{ top:'15%', width: "100%"  }} />
      {/* Container for Question Number, Question, and Score */}
      <View style={styles.questionInfoContainer}>
        {/* <Text style={styles.questionInfoTextone}></Text> */}
        <Text style={styles.questionInfoText}>Who is our Prime Minister of India  ?</Text>
        {/* <Text style={styles.questionInfoText}>0.00</Text> */}
      </View>

      <Image source={Brain} style={styles.brainImage} />

      {/* Container for Options */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.optionButton, selectedOption === option && styles.selectedButton]} 
            onPress={() => handleOptionChange(option)}
          >
            <Text style={[styles.optionText, selectedOption === option && styles.selectedButtonText]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Error modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>
              {error}
            </Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Image source={BottomShape}  style={{bottom:'18%', height: 200 , width:400}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionInfoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    // backgroundColor: "background: rgba(254, 255, 223, 1);",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    bottom:'20%',
  },
  questionInfoText: {
    color: "black",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    paddingTop:15,
  },
  questionInfoTextone:{
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  brainImage: {
    height: 100,
    width: 100,
    position: "absolute",
    top: 40,
    alignSelf: "center",
  },
  optionsContainer: {
    width: 280,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 20,
    bottom: "22%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    zIndex:1,
  },
  optionButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:200,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(255, 231, 154, 1)",
  },
  selectedButton: {
    backgroundColor: "background: rgba(255, 169, 82, 1);" ,
  },
  optionText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
  },
  selectedButtonText: {
    color: "white",
  },
  submitButton: {
    width: 200,
    backgroundColor: "rgba(61, 196, 103, 1)",
    borderRadius: 38.84,
    borderWidth: 3.88,
    borderColor: "rgba(255, 255, 255, 1)",
    padding: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  closeButtonText: {
    color: "blue",
    marginTop: 10,
  },
});

export default QuestionScreen;
