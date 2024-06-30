
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';

// const Stack = createStackNavigator();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='WelcomeScreen'>
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import BluetoothScreen from "./src/screens/BluetoothScreen";
import NormalUser from "./src/screens/NormalUserScreen";
import HomeScreen1 from "./src/screens/HomeScreen1";
import GoogleMapScreen from "./src/screens/GoogleMapScreen";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Page1WelcomeScreen"
              component={Page1WelcomeScreen}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Page5Home"
              component={Page5Home}
              options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
              name="Page7SorryPage"
              component={Page7SorryPage}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="GoogleMapScreen"
              component={GoogleMapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalUserScreen"
              component={NormalUser}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Page4ChoiceOption"
              component={Page4ChoiceOption}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="BluetoothScreen"
              component={BluetoothScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="HomeScreen1"
              component={HomeScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SigninScreen"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
