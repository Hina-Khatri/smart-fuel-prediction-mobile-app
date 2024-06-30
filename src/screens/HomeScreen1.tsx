import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FormContainer from "../components/FormContainer";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";

const HomeScreen1 = () => {
  return (
    <View style={styles.page5Home}>
      <View style={styles.items}>
        <View style={styles.spotifyLayout}>
          <Text style={[styles.selectYourDestination, styles.nearestTypo]}>
            Select Your Destination
          </Text>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.nearestPetrolPump, styles.nearestTypo]}>
            Nearest Petrol Pump
          </Text>
        </View>
        <View style={[styles.youtubePremium, styles.spotifyLayout]}>
          <Text style={[styles.nearestWorkshops, styles.nearestTypo]}>
            Nearest Workshops
          </Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <View style={[styles.tabsBg, styles.tabsBgPosition]} />
        <View style={[styles.upcomingBills, styles.rectangleLayout]}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <Text style={[styles.bikeAvgGraph, styles.lTypo]}>
            Bike AVG Graph
          </Text>
        </View>
        <View style={styles.yourSubscriptions}>
          <View style={styles.rectangle1} />
          <Text style={[styles.home, styles.lTypo]}>Home</Text>
        </View>
      </View>
      <View style={styles.lightBg} />
      <FormContainer />
      <Image
        style={[styles.iconssettings, styles.lPosition]}
        resizeMode="cover"
        source={require("../../asset/iconssettings.png")}
      />
      <View style={[styles.activeSubs, styles.subsLayout]}>
        <Text style={[styles.currentAvg, styles.lastTypo]}>Current Avg</Text>
        <Text style={[styles.km, styles.lPosition]}>12km</Text>
        <View style={[styles.line, styles.linePosition]} />
      </View>
      <View style={[styles.highestSubs, styles.subsLayout]}>
        <Text style={[styles.lastKmDriven, styles.lastTypo]}>
          Last km driven
        </Text>
        <Text style={[styles.km, styles.lPosition]}>15km</Text>
        <View style={[styles.line1, styles.linePosition]} />
      </View>
      <View style={[styles.lowestSubs, styles.subsLayout]}>
        <Text style={[styles.lastFuelAdded, styles.lastTypo]}>
          Last Fuel Added
        </Text>
        <Text style={[styles.l, styles.lPosition]}>1.2L</Text>
        <View style={[styles.line2, styles.linePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nearestTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
    left: 63,
    top: 22,
    color: Color.greyscaleWhite,
    position: "absolute",
  },
  spotifyLayout: {
    height: 64,
    width: 328,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  tabsBgPosition: {
    backgroundColor: Color.greyscaleGray100,
    left: 0,
    top: 0,
  },
  rectangleLayout: {
    height: 36,
    width: 154,
    position: "absolute",
  },
  lTypo: {
    textAlign: "center",
    left: "80%",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
  },
  lPosition: {
    top: 32,
    position: "absolute",
  },
  subsLayout: {
    height: 68,
    width: 104,
    top: 337,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  lastTypo: {
    color: Color.greyscaleGrey40,
    top: 16,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    position: "absolute",
  },
  linePosition: {
    height: 1,
    width: 47,
    borderTopWidth: 1,
    marginLeft: -23.5,
    left: "50%",
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  selectYourDestination: {
    width: 233,
  },
  nearestPetrolPump: {
    width: 189,
  },
  youtubePremium: {
    marginTop: 8,
  },
  nearestWorkshops: {
    width: 134,
  },
  items: {
    top: 516,
    left: 24,
    position: "absolute",
  },
  tabsBg: {
    width: 327,
    height: 50,
    backgroundColor: Color.greyscaleGray100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_980xl,
    backgroundColor: Color.greyscaleGray100,
    left: 0,
    top: 0,
  },
  bikeAvgGraph: {
    color: Color.greyscaleGrey30,
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    marginTop: -8,
    textAlign: "center",
    left: "80%",
    position: "absolute",
    marginLeft: 70,
  },
  upcomingBills: {
    left: 163,
    top: 7,
    width: 154,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  rectangle1: {
    backgroundColor: Color.colorDimgray,
    width: 155,
    height: 36,
    left: 0,
    top: 0,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  home: {
    marginLeft: -68,
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    marginTop: -8,
    textAlign: "center",
    left: "50%",
    position: "absolute",
    color: Color.greyscaleWhite,
  },
  yourSubscriptions: {
    left: 165,
    width: 155,
    height: 36,
    top: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  tabs: {
    top: 450,
    left: 25,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 50,
    width: 328,
    position: "absolute",
  },
  lightBg: {
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
    width: 375,
    height: 429,
    opacity: 0.5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconssettings: {
    left: 328,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  currentAvg: {
    marginLeft: -35,
  },
  km: {
    marginLeft: -19,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    top: 32,
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  line: {
    borderColor: Color.colorDarksalmon,
  },
  activeSubs: {
    left: 23,
  },
  lastKmDriven: {
    marginLeft: -43,
  },
  line1: {
    borderColor: Color.colorMediumslateblue,
  },
  highestSubs: {
    left: 135,
  },
  lastFuelAdded: {
    marginLeft: -47,
  },
  l: {
    marginLeft: -14,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.h2,
    fontWeight: "600",
    top: 32,
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  line2: {
    borderColor: Color.colorTurquoise,
  },
  lowestSubs: {
    left: 247,
  },
  page5Home: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomeScreen1;
