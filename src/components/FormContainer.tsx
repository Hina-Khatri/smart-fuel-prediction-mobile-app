import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../../GlobalStyles";

const FormContainer = memo(() => {
  return (
    <View style={[styles.mainCircle, styles.mainCirclePosition]}>
      <Image
        style={[styles.criclesBgIcon, styles.mainCirclePosition]}
        resizeMode="cover"
        source={require("../../asset/cricles-bg.png")}
      />
      <Text style={styles.l}>2.5L</Text>
      <Text style={[styles.current, styles.currentTypo]}>Current Petrol</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../asset/ellipse.png")}
      />
      <Image
        style={[styles.ellipseIcon1, styles.buttonsmallLayout]}
        resizeMode="cover"
        source={require("../../asset/ellipse1.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../../asset/ellipse2.png")}
      />
      <View style={[styles.buttonsmall, styles.buttonsmallLayout]}>
        <Text style={[styles.checkPetrol, styles.currentTypo]}>
          Check Petrol
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainCirclePosition: {
    left: 0,
    position: "absolute",
  },
  currentTypo: {
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "center",
  },
  buttonsmallLayout: {
    borderRadius: Border.br_base,
    position: "absolute",
  },
  criclesBgIcon: {
    top: 7,
    width: 450,
    height: 430,
  },
  l: {
    marginTop: -9.5,
    marginLeft: -75.7,
    fontSize: FontSize.size_51xl,
    lineHeight: 70,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    textAlign: "center",
    color: Color.greyscaleWhite,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  current: {
    marginTop: 77.5,
    marginLeft: -41.5,
    color: Color.greyscaleGrey40,
    left: "50%",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 88,
    left: 25,
    width: 300,
    height: 196,
    opacity: 0.5,
    position: "absolute",
  },
  ellipseIcon1: {
    top: 59,
    left: 44,
    width: 286,
    height: 242,
  },
  ellipseIcon2: {
    top: 34,
    left: 19,
    borderRadius: Border.br_980xl,
    width: 336,
    height: 292,
    position: "absolute",
  },
  checkPetrol: {
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
  },
  buttonsmall: {
    marginLeft: -50,
    top: 277,
    backgroundColor: Color.colorGray_100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    left: "50%",
  },
  mainCircle: {
    top: -8,
    width: 375,
    height: 309,
  },
});

export default FormContainer;
