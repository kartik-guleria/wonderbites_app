import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../commonScreens/welcome';
import SideMenuScreen from '../commonScreens/SideMenuScreen';
import VerificationCodeScreen from '../commonScreens/VerificationCodeScreen';
import OtpProcessScreen from '../commonScreens/OtpProcessScreen';
import SignInToJoin from '../commonScreens/SignInToJoin';
import SignInScreen from '../commonScreens/SignInScreen';
import SignUpScreen from '../commonScreens/SignUpScreen';
import DeliveryTabs from './DeliveryTabs';
import MainScreen from '../delivery/screens/MainScreen';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  }
  return (
    <NavigationContainer>
       <Stack.Navigator 
        screenOptions={screenOptions}
       >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SideMenu" component={SideMenuScreen} />
        <Stack.Screen name="SignJoin" component={SignInToJoin} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="OtpProcess" component={OtpProcessScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainScreen}  />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="DeliveryTabs" component={DeliveryTabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
