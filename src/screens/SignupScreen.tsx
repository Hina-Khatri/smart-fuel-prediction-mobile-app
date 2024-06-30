import * as React from "react";
import axios from "axios";
import { Modal } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TypePrimary from "../components/TypePrimary";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [loginId, setLoginId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleSignIn = () => {
    navigation.navigate('SigninScreen' as never); // Assuming 'Login' is the name of your login screen
  };
  const handleSignUp = async () => {
    try {
      // Validate user input
      if (!loginId && !password && !name && !confirmPassword) {
        setErrorMessage("Please provide complete information");
        return;
      }
      else{
        if (!name) {
          setErrorMessage("Please enter name");
          return;
        }
        
        const nameRegex = /^[a-zA-Z\s]+$/; // Regex for alphabetical characters only
        if (!nameRegex.test(name)) {
          setErrorMessage("Please enter a valid name (only letters allowed)");
          return;
        }
        if (!loginId) {
          setErrorMessage("Please enter email");
          return;
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/; // Regex for Gmail format
        if (!emailRegex.test(loginId)) {
          setErrorMessage("Please enter a valid email");
           return;
        }
        if (!password) {
          setErrorMessage("Please enter password");
          return;
        }
        if (!confirmPassword) {
          setErrorMessage("Please enter confirmation password");
          return;
        }
        if (confirmPassword != password && password != confirmPassword) {
          setErrorMessage("Please enter valid password");
          return;
        }
      }

      // Construct the API endpoint and payload
      const apiUrl = "  https://a51e-59-103-211-193.ngrok.io/api/users/createOrUpdate";
      const payload = {
        "email": loginId,
        "password": password,
        "name": name,
      };
      console.log("Login Payload: ", payload);

      // Make the API call using Axios
      const response = await axios.post(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (response.status === 200) {
        // Parse the response JSON if needed
        const result = response.data;

        // Perform any further logic based on the API response
        console.log("API Response:", result);

        // For now, navigate to the Home screen
        // navigation.navigate("SigninScreen" as never);
        setModalVisible(true);
      } else {
        // Handle API error
        console.error("API Error:", response.statusText);
        setErrorMessage("Something went wrong. Please try again."); // Set error message
      }
    } catch (error: any) {
      // Handle other errors
      console.error("Error:", error.message);
      setErrorMessage("Something went wrong. Please try again."); // Set error message
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.page3Login}>
        <Text style={[styles.ifYouDont, styles.ifYouDontTypo]}>
          Do you have already an account?
        </Text>
        <TextInput
          style={[styles.inputname, styles.inputNamePosition]}
          placeholder="Name"
          placeholderTextColor={Color.greyscaleGrey50}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[styles.inputlogin, styles.inputloginPosition]}
          placeholder="Email"
          placeholderTextColor={Color.greyscaleGrey50}
          value={loginId}
          onChangeText={(text) => setLoginId(text)}
        />
        <TextInput
          style={[
            styles.inputlogin,
            styles.inputpassword,
            styles.inputloginPosition,
          ]}
          placeholder="Password"
          placeholderTextColor={Color.greyscaleGrey50}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={[
            styles.inputlogin,
            styles.inputpassword,
            styles.inputloginPosition,
            styles.inputconfirmPassword,
          ]}
          placeholder="Confirm Password"
          placeholderTextColor={Color.greyscaleGrey50}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
              {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
        <TypePrimary
          getStarted="Sign In"
          typePrimaryPosition="absolute"
          typePrimaryBackgroundColor="rgba(255, 255, 255, 0.1)"
          typePrimaryPaddingHorizontal="unset"
          typePrimaryMarginLeft={-168}
          typePrimaryTop={650}
          typePrimaryLeft="50%"
          typePrimaryWidth={324}
          typePrimaryHeight="unset"
          onPress={handleSignIn}
        />
        <TypePrimary
          getStarted="Get started, it’s free!"
          typePrimaryPosition="absolute"
          typePrimaryBackgroundColor="#ff7966"
          typePrimaryElevation={8}
          typePrimaryPaddingHorizontal="unset"
          typePrimaryMarginLeft="unset"
          typePrimaryTop={570}
          typePrimaryLeft={26}
          typePrimaryWidth={324}
          typePrimaryHeight="unset"
          onPress={handleSignUp}
        />
                  <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => navigation.navigate("SigninScreen" as never)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  User Registration Successfull
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SigninScreen" as never)}
                  style={[styles.okayButton, { backgroundColor: "#ff7966" }]}
                >
                  <Text style={{ color: "#fff" }}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ifYouDontTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  loginClr: {
    color: Color.greyscaleGrey50,
    letterSpacing: 0,
  },
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
  },
  inputloginPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  inputNamePosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  ifYouDont: {
    marginLeft: -111.5,
    top: 625,
    color: Color.greyscaleWhite,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  forgotPassoword: {
    marginLeft: 32.5,
    top: 446,
    color: Color.greyscaleGrey50,
    textAlign: "center",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
    left: "50%",
    position: "absolute",
  },
  frame: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  rememberMe: {
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
    color: Color.greyscaleGrey50,
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    left: 24,
    top: 446,
    position: "absolute",
  },
  login: {
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  input: {
    borderRadius: Border.br_base,
    height: 48,
    marginTop: 4,
    alignSelf: "stretch",
  },
  inputlogin: {
    top: 335,
    height: 48,
    marginTop: 4,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    paddingLeft: 12,
    color: Color.greyscaleGrey50,
  },
  inputname: {
    top: 270,
    height: 48,
    marginTop: 4,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    paddingLeft: 12,
    color: Color.greyscaleGrey50,
  },
  inputpassword: {
    top: 400,
  },
  page3Login: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  inputconfirmPassword: {
    top: 470, // Adjust the top value to position the Confirm Password field
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  errorMessage: {
    color: Color.greyscaleGrey50,
    textAlign: "center",
    marginTop: 530,
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
});

export default SignupScreen;
