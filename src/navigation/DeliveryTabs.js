import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../commonScreens/HomeScreen';

import AddNewCardScreen from '../delivery/screens/AddNewCardScreen';
import PersonalDetailScreen from '../delivery/screens/PersonalDetailScreen';


const Tab = createBottomTabNavigator();

export default function DeliveryTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {
                //     // let iconName;
                //     // if (route.name === 'Main') {
                //     //     iconName = focused
                //     //         ? 'ios-information-circle'
                //     //         : 'ios-information-circle-outline';
                //     // } else if (route.name === 'AddNewCard') {
                //     //     iconName = focused ? 'ios-list-box' : 'ios-list';
                //     // }else if(route.name === 'PersonalDetail'){
                //     //     iconName = focused ? 'ios-list-box' : 'ios-list';
                //     // }
                //     // You can return any component that you like here!
                //     return <Ionicons name={iconName} size={size} color={color} />;
                // },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                gestureEnabled: false,
            })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="AddNewCard" component={AddNewCardScreen} />
            <Tab.Screen name="PersonalDetail" component={PersonalDetailScreen} />
        </Tab.Navigator>
    );
}