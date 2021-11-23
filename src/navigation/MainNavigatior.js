import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddAddressScreen from '../Screens/Delivery/AddAddressScreen';
import AskAddressScreen from '../Screens/Delivery/AskAddressScreen';
import CartScreen from '../Screens/Delivery/CartScreen';
import CategoryScreen from '../Screens/Delivery/CategoryScreen';
import CheckoutScreen from '../Screens/Delivery/CheckoutScreen';
import ConfirmationScreen from '../Screens/Delivery/ConfirmationScreen';
import HomeScreen from '../Screens/CommonScreens/HomeScreen';
import MainScreen from '../Screens/Delivery/MainScreen';
import ProductDetailScreen from '../Screens/Delivery/ProductDetailScreen';
import SignInScreen from '../Screens/CommonScreens/SignInScreen';
import SignUpScreen from '../Screens/CommonScreens/SignUpScreen';
import VerificationCodeEmailScreen from '../Screens/CommonScreens/VerificationCodeEmailScreen';
import VerificationCodeScreen from '../Screens/CommonScreens/VerificationCodeScreen';
import WelcomeScreen from '../Screens/CommonScreens/WelcomeScreen';
import ResetPasswordScreen from '../Screens/CommonScreens/ResetPasswordScreen';
import CheckoutCompleteScreen from '../Screens/Delivery/CheckoutCompleteScreen';
import OrderCompleteScreen from '../Screens/Delivery/OrderCompleteScreen';
import ChooseOptionScreen from '../Screens/Delivery/ChooseOptionScreen';
import AddIngrieidientsScreen from '../Screens/Delivery/AddIngrieidientsScreen';
import WelcomeNew from '../Screens/CommonScreens/welcome';
import SideMenuScreen from '../Screens/CommonScreens/SideMenuScreen';
import SignInToJoin from '../Screens/CommonScreens/SignInToJoin';
import PaymentDetailScreen from '../Screens/Delivery/PaymentDetailScreen.js';
import AddNewCardScreen from '../Screens/Delivery/AddNewCardScreen';
import EmptyCartScreen from '../Screens/Delivery/EmptyCartScreen';
import TrackOrderScreen from '../Screens/Delivery/TrackOrderScreen';
import BottomViewScreen from '../Screens/Delivery/BottomViewScreen';
import ChangeEmailScreen from '../Screens/CommonScreens/ChangeEmailScreen';
import SettingsScreen from '../Screens/CommonScreens/SettingsScreen';
import SelectLangScreen from '../Screens/CommonScreens/SelectLangScreen';
import AccountSettingScreen from '../Screens/CommonScreens/AccountSettingScreen';
import NotificationViewScreen from '../Screens/Delivery/NotificationViewScreen';
import TableReservationScreen from '../Screens/Delivery/TableReservationScreen';
import MyBookingScreen from '../Screens/Delivery/MyBookingScreen';
import RateUsScreen from '../Screens/CommonScreens/RateUsScreen';
import AboutUsScreen from '../Screens/CommonScreens/AboutUsScreen';
import FeedbackScreen from '../Screens/Delivery/FeedbackScreen';
import ProfileScreen from '../Screens/CommonScreens/ProfileScreen';
import WishlistScreen from '../Screens/Delivery/WishlistScreen';
import PersonalDetailScreen from '../Screens/Delivery/PersonalDetailScreen';
import YourLocationScreen from '../Screens/Delivery/YourLocationScreen';
import OpenLocSettingScreen from '../Screens/Delivery/OpenLocSettingScreen';
import PopularSearchScreen from '../Screens/Delivery/PopularSearchScreen.js';
import TermsConditionScreen from '../Screens/CommonScreens/TermsConditionScreen';
import OrderHistoryScreen from '../Screens/Delivery/OrderHistoryScreen';
import UpcomingOrderDetailScreen from '../Screens/Delivery/UpcomingOrderDetailScreen';
import AddressListScreen from '../Screens/Delivery/AddressListScreen.js';
import MyWonderPointsScreen from '../Screens/Delivery/MyWonderPointsScreen.js';
import ChatSupportScreen from '../Screens/Delivery/ChatSupportScreen.js';
import OtpProcessScreen from '../Screens/CommonScreens/OtpProcessScreen';

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
  },
);

export default createAppContainer(MainNavigatior);
