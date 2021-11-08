import {Platform} from 'react-native';

import Colors from '../constants/Colors.js';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
        backgroundColor: Platform.OS === 'android' ? Colors.headerColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor,
    },
    // headerTitle: 'Wonderbites',
  },
);
// const MainTabNavigator = createBottomTabNavigator({
//   Delivery: HomeScreen,
//   Services: MainScreen,
//   // Orders: ConfirmationScreen,
// });

export default createAppContainer(MainNavigatior);
