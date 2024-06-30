import { useState } from "react";
import axios from "axios";
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

const SigninScreen = () => {
  const navigation = useNavigation();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleSignIn = async () => {
    try {
      // Validate user input
      if (!loginId && !password) {
        setErrorMessage("Please enter both email and password");
        return;
      }
      if (!loginId) {
        setErrorMessage("Please enter email");
        return;
      }
      if (!password) {
        setErrorMessage("Please enter password");
        return;
      }

      // Construct the API endpoint and payload
      const apiUrl = "https://f21e-59-103-205-219.ngrok.io/api/users/login";
      const payload = {
        email: loginId,
        password: password,
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
        navigation.navigate("BluetoothScreen" as never);
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

  const handleSignUp = () => {
    // Navigate to the Signup screen
    navigation.navigate("SignupScreen" as never);
  };
  return (
    <View style={styles.page3Login}>
      <Text style={[styles.ifYouDont, styles.ifYouDontTypo]}>
        If you don't have an account yet?
      </Text>
      <Text style={[styles.forgotPassoword, styles.loginClr]}>
        Forgot password
      </Text>
      <View style={styles.autoLayoutHorizontal}>
        <View style={[styles.frame, styles.frameBorder]} />
        <Text style={[styles.rememberMe, styles.loginClr]}>Remember me</Text>
      </View>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TypePrimary
        getStarted="Sign Up"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="rgba(255, 255, 255, 0.1)"
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft={-168}
        typePrimaryTop={575}
        typePrimaryLeft="50%"
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handleSignUp}
      />
      <TypePrimary
        getStarted="Sign In"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="#ff7966"
        typePrimaryElevation={8}
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft="unset"
        typePrimaryTop={494}
        typePrimaryLeft={26}
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handleSignIn}
      />
    </View>
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
  ifYouDont: {
    marginLeft: -111.5,
    top: 550,
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
    top: 354,
  },
  page3Login: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  errorMessage: {
    color: Color.greyscaleGrey50,
    textAlign: "center",
    marginTop: 420,
  },
});

export default SigninScreen;
