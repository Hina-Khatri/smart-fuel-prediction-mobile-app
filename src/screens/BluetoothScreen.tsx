import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";
import TypePrimary from "../components/TypePrimary";

const BluetoothScreen = () => {
  const navigation = useNavigation();

  const handlePaidUser = () => {
    console.log("handleHomeScreen");
    navigation.navigate("HomeScreen1" as never);
  };
  const handleNormalUser = () => {
    navigation.navigate("NormalUserScreen" as never);
  };

  return (
    <View style={styles.bluetoothScreen}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      
      <TypePrimary
        getStarted="Don't Have Device"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="rgba(255, 255, 255, 0.1)"
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft={-168}
        typePrimaryTop={675}
        typePrimaryLeft="50%"
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handleNormalUser}
      />

      <TypePrimary
        getStarted="Device Installed"
        typePrimaryPosition="absolute"
        typePrimaryBackgroundColor="#ff7966"
        typePrimaryElevation={8}
        typePrimaryPaddingHorizontal="unset"
        typePrimaryMarginLeft="unset"
        typePrimaryTop={600}
        typePrimaryLeft={26}
        typePrimaryWidth={324}
        typePrimaryHeight="unset"
        onPress={handlePaidUser}
      />


      <Text style={[styles.congueMalesuadaIn, styles.getStartedClr]}>
        Select Your Choice
      </Text>
      <Image
        style={styles.bluetoothScreenChild}
        resizeMode="cover"
        source={require("../../asset/frame-3.png")}
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
  deviceInstalledClr: {
    color: Color.greyscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.h2,
    textAlign: "left",
  },
  deviceInstalled: {
    fontWeight: "600",
    fontFamily: FontFamily.h2,
    textAlign: "left",
  },
  congueMalesuadaIn: {
    marginLeft: -145.5,
    top: 550,
    left: "50%",
    letterSpacing: 0,
    fontFamily: FontFamily.bodyMedium,
    textAlign: "center",
    width: 290,
    position: "absolute",
  },
  bluetoothScreenChild: {
    top: -90,
    right: -200,
    width: 750,
    height: 735,
    position: "absolute",
  },
  bluetoothScreen: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default BluetoothScreen;
