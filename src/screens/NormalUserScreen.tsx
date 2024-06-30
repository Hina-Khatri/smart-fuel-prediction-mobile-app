import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import TypePrimary from "../components/TypePrimary";
import { Modal } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const NormalUserScreen = () => {
  const navigation = useNavigation();
  const [vehicleAverage, setVehicleAverage] = React.useState("");
  const [petrol, setPetrol] = React.useState("");
  const [result, setResult] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleMap = () => {
    // Navigate to the Signup screen
    navigation.navigate("GoogleMapScreen" as never);
  };

  const calculateResult = () => {
    const resultValue = parseFloat(vehicleAverage) * parseFloat(petrol);
    setResult(resultValue.toFixed(2)); // Assuming you want 2 decimal places
    setModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.normalUser}>
          {/* Vehicle Average Section */}
          <TextInput
            style={[styles.input, styles.inputBorder]}
            value={vehicleAverage}
            placeholderTextColor={Color.greyscaleGrey50}
            placeholder="Vehicle Average"
            onChangeText={(text) => setVehicleAverage(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input2, styles.inputBorder]}
            value={petrol}
            placeholderTextColor={Color.greyscaleGrey50}
            placeholder="Petrol in Liter"
            onChangeText={(text) => setPetrol(text)}
            keyboardType="numeric"
          />

          {/* Button Section */}
          <TypePrimary
        getStarted="Select Destination"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="rgba(255, 255, 255, 0.1)"
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft={-168}
        typePrimaryTop={731}
        typePrimaryLeft="50%"
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handleMap}
      />
          <TouchableOpacity onPress={calculateResult}>
            <TypePrimary
              getStarted="Check it Now"
              typePrimaryBackgroundColor="#ff7966"
              typePrimaryElevation={25}
              typePrimaryPaddingHorizontal="unset"
              typePrimaryMarginLeft="unset"
              typePrimaryTop={650}
              typePrimaryLeft={25}
              typePrimaryWidth={324}
              typePrimaryHeight="unset"
              onPress={calculateResult}
            />
          </TouchableOpacity>
          {/* Settings Icon */}
          <Image
            style={styles.iconssettings}
            resizeMode="cover"
            source={require("../../asset/iconssettings.png")}
          />

          {/* Result Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  Your bike can travel approximately {result} kilometers with
                  the given petrol.
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={[styles.okayButton, { backgroundColor: "#ff7966" }]}
                >
                  <Text style={{ color: "#fff" }}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
// Define the styles for the component
const styles = StyleSheet.create({
  enterTypo: {
    width: 326,
    textAlign: "left",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.h1_size,
    left: 24,
    position: "absolute",
  },
  inputBorder: {
    height: 48,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    right: 25,
    top: "50%",
    borderRadius: Border.br_base,
    left: 24,
    position: "absolute",
  },
  enterVehicleAverage: {
    top: 128,
  },
  destinationLocation: {
    top: 293,
  },
  selectThroughMap: {
    top: 375,
  },
  input: {
    marginTop: -100,
    color: Color.greyscaleGrey50,
  },
  input1: {
    marginTop: -92,
    color: Color.greyscaleGrey50,
  },
  image2Icon: {
    top: 399,
    width: 325,
    height: 316,
    borderRadius: Border.br_base,
    left: 24,
    position: "absolute",
  },
  enterYourPetrol: {
    top: 43,
  },
  currentLocation: {
    top: 209,
  },
  input2: {
    marginTop: -40,
    color: Color.greyscaleGrey50,
  },
  input3: {
    marginTop: -175,
    color: Color.greyscaleGrey50,
  },
  iconssettings: {
    top: 21,
    left: 326,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  normalUser: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    position: "relative",
    zIndex: 1, // Add this line
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1, // Add zIndex property
    // position: 'absolute', // Ensure this property is set
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  modalText: {
    fontSize: FontSize.h1_size,
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    marginBottom: 20,
  },
  okayButton: {
    padding: 10,
    borderRadius: Border.br_base,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default NormalUserScreen;
