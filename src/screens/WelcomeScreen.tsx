import React from "react";
import { Text, StyleSheet, View, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('SigninScreen' as never); // Assuming 'Login' is the name of your login screen
  };

  return (
    <View style={styles.page1WelcomeScreen}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={[styles.getStarted, styles.getStartedClr]}>
          Get started
        </Text>
      </TouchableOpacity>
      <Text style={[styles.congueMalesuadaIn, styles.getStartedClr]}>
        Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna
        risus.
      </Text>
      <Image
        style={styles.page1WelcomeScreenChild}
        resizeMode="cover"
        source={require('../../asset/frame-3.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedClr: {
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.h2,
    textAlign: "left",
  },
  button: {
    top: 680,
    left: 25,
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorSalmon,
    // shadowColor: "rgba(255, 121, 102, 0.5)",
    shadowColor: '#FF7966',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 50,
    elevation: 8,
    shadowOpacity: 0.85,
    width: 324,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    position: "absolute",
  },
  congueMalesuadaIn: {
    marginLeft: -145.5,
    top: 628,
    left: "50%",
    letterSpacing: 0,
    fontFamily: FontFamily.bodyMedium,
    textAlign: "center",
    width: 290,
    position: "absolute",
  },
  page1WelcomeScreenChild: {
    top: -90,
    right: -200,
    width: 750,
    height: 735,
    position: "absolute",
  },
  page1WelcomeScreen: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
