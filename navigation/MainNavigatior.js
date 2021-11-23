// import React from 'react';
// import {Button, View, Text} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import {Ionicons} from '@expo/vector-icons';
// const Tab = createBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           if (route.name === 'TabA') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'TabB') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen name="TabA" component={TabAScreen} />
//       <Tab.Screen name="TabB" component={TabBScreen} />
//     </Tab.Navigator>
//   );
// }
// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>No New Notifications!</Text>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
// const Stack = createStackNavigator();
// function TabAScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
//       <Stack.Screen name="TabA Details" component={Details} />
//     </Stack.Navigator>
//   );
// }
// function TabADetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Welcome to TabA page!</Text>
//       <Button
//         onPress={() => navigation.navigate('TabA Details')}
//         title="Go to TabA Details"
//       />
//     </View>
//   );
// }
// function Details() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>TabA Details here!</Text>
//     </View>
//   );
// }
// function TabBScreen() {
//   return (
//     <View>
//       <Text style={{textAlign: 'center', marginTop: 300}}>
//         Welcome to TabB page!
//       </Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
import {Platform} from 'react-native';
import React, {Component} from 'react';
import Colors from '../constants/Colors.js';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddAddressScreen from '../screens/AddAddressScreen';
import AskAddressScreen from '../screens/AskAddressScreen';
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationCodeEmailScreen from '../screens/VerificationCodeEmailScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import CheckoutCompleteScreen from '../screens/CheckoutCompleteScreen';
import OrderCompleteScreen from '../screens/OrderCompleteScreen';
import ChooseOptionScreen from '../screens/ChooseOptionScreen';
import AddIngrieidientsScreen from '../screens/AddIngrieidientsScreen';
import WelcomeNew from '../screens/welcome';
import SideMenuScreen from '../screens/SideMenuScreen';
import SignInToJoin from '../screens/SignInToJoin';
import PaymentDetailScreen from '../screens/PaymentDetailScreen.js';
import AddNewCardScreen from '../screens/AddNewCardScreen';
import EmptyCartScreen from '../screens/EmptyCartScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
import BottomViewScreen from '../screens/BottomViewScreen';
import ChangeEmailScreen from '../screens/ChangeEmailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SelectLangScreen from '../screens/SelectLangScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import NotificationViewScreen from '../screens/NotificationViewScreen';
import TableReservationScreen from '../screens/TableReservationScreen';
import MyBookingScreen from '../screens/MyBookingScreen';
import RateUsScreen from '../screens/RateUsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WishlistScreen from '../screens/WishlistScreen';
import PersonalDetailScreen from '../screens/PersonalDetailScreen';
import YourLocationScreen from '../screens/YourLocationScreen';
import OpenLocSettingScreen from '../screens/OpenLocSettingScreen';
import PopularSearchScreen from '../screens/PopularSearchScreen.js';
import TermsConditionScreen from '../screens/TermsConditionScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import UpcomingOrderDetailScreen from '../screens/UpcomingOrderDetailScreen';
import AddressListScreen from '../screens/AddressListScreen.js';
import MyWonderPointsScreen from '../screens/MyWonderPointsScreen.js';
import ChatSupportScreen from '../screens/ChatSupportScreen.js';
import OtpProcessScreen from '../screens/OtpProcessScreen';

const MainNavigatior = createStackNavigator(
  {
    Home: HomeScreen,
    AddAddress: AddAddressScreen,
    AskAddress: AskAddressScreen,
    Cart: CartScreen,
    Category: CategoryScreen,
    Checkout: CheckoutScreen,
    Confirmation: ConfirmationScreen,
    Main: MainScreen,
    ProductDetail: ProductDetailScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    VerificationCodeEmail: VerificationCodeEmailScreen,
    VerificationCode: VerificationCodeScreen,
    Welcome: WelcomeScreen,
    WelcomeN: WelcomeNew,
    ResetPassword: ResetPasswordScreen,
    CheckoutComplete: CheckoutCompleteScreen,
    OrderComplete: OrderCompleteScreen,
    ChooseOption: ChooseOptionScreen,
    AddIngrieidients: AddIngrieidientsScreen,
    SideMenu: SideMenuScreen,
    SignJoin: SignInToJoin,
    PaymentDetail: PaymentDetailScreen,
    AddNewCard: AddNewCardScreen,
    EmptyCart: EmptyCartScreen,
    TrackOrder: TrackOrderScreen,
    BottomView: BottomViewScreen,
    Settings: SettingsScreen,
    SelectLang: SelectLangScreen,
    AccountSetting: AccountSettingScreen,
    ChangeEmail: ChangeEmailScreen,
    NotificationView: NotificationViewScreen,
    TableReservation: TableReservationScreen,
    MyBooking: MyBookingScreen,
    RateUs: RateUsScreen,
    Feedback: FeedbackScreen,
    AboutUs: AboutUsScreen,
    Profile: ProfileScreen,
    Wishlist: WishlistScreen,
    PersonalDetail: PersonalDetailScreen,
    YourLocation: YourLocationScreen,
    OpenLocSetting: OpenLocSettingScreen,
    PopularSearch: PopularSearchScreen,
    TermsCondition: TermsConditionScreen,
    OrderHistory: OrderHistoryScreen,
    UpcomingOrderDetail: UpcomingOrderDetailScreen,
    AddressList: AddressListScreen,
    MyWonderPoints: MyWonderPointsScreen,
    ChatSupport: ChatSupportScreen,
    OtpProcess: OtpProcessScreen,
  },
  {
    initialRouteName: 'WelcomeN',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.headerColor : Colors.headerColor,
      },
      headerTintColor:
        Platform.OS === 'android' ? Colors.headerColor : Colors.headerColor,
    },
    // headerTitle: 'Wonderbites',
  },
);
// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Profile: ProfileScreen,
// Home: {
//   screen: MainNavigatior,
//   navigationOptions: {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({tintColor}) => (
//       <View>
//         <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
//       </View>
//     ),
//   },
// },
// Profile: {
//   screen: ProfileScreen,
//   navigationOptions: {
//     tabBarLabel: 'Profile',
//     tabBarIcon: ({tintColor}) => (
//       <View>
//         <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
//       </View>
//     ),
//     activeColor: '#f60c0d',
//     inactiveColor: '#f65a22',
//     barStyle: {backgroundColor: '#f69b31'},
//   },
// },
// Cart: {
//   screen: CartScreen,
//   navigationOptions: {
//     tabBarLabel: 'Cart',
//     tabBarIcon: ({tintColor}) => (
//       <View>
//         <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
//       </View>
//     ),
//   },
// },
// },
// {
//   initialRouteName: 'Home',
//   activeColor: '#f0edf6',
//   inactiveColor: '#226557',
//   barStyle: {backgroundColor: '#3BAD87'},
// },
// });

// export default createAppContainer(TabNavigator);

export default createAppContainer(MainNavigatior);

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
