import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddAddressScreen from '../delivery/screens/AddAddressScreen';
import AskAddressScreen from '../delivery/screens/AskAddressScreen';
import CartScreen from '../delivery/screens/CartScreen';
import CategoryScreen from '../delivery/screens/CategoryScreen';
import CheckoutScreen from '../delivery/screens/CheckoutScreen';
import ConfirmationScreen from '../delivery/screens/ConfirmationScreen';
import HomeScreen from '../commonScreens/HomeScreen';
import MainScreen from '../delivery/screens/MainScreen';
import ProductDetailScreen from '../delivery/screens/ProductDetailScreen';
import SignInScreen from '../commonScreens/SignInScreen';
import SignUpScreen from '../commonScreens/SignUpScreen';
import VerificationCodeScreen from '../commonScreens/VerificationCodeScreen';
import ResetPasswordScreen from '../commonScreens/ResetPasswordScreen';
import CheckoutCompleteScreen from '../delivery/screens/CheckoutCompleteScreen';
import OrderCompleteScreen from '../delivery/screens/OrderCompleteScreen';
import ChooseOptionScreen from '../delivery/screens/ChooseOptionScreen';
import AddIngrieidientsScreen from '../delivery/screens/AddIngrieidientsScreen';
import WelcomeNew from '../commonScreens/welcome';
import SideMenuScreen from '../commonScreens/SideMenuScreen';
import SignInToJoin from '../commonScreens/SignInToJoin';
import PaymentDetailScreen from '../delivery/screens/PaymentDetailScreen.js';
import AddNewCardScreen from '../delivery/screens/AddNewCardScreen';
import EmptyCartScreen from '../delivery/screens/EmptyCartScreen';
import TrackOrderScreen from '../delivery/screens/TrackOrderScreen';
import BottomViewScreen from '../delivery/screens/BottomViewScreen';
import ChangeEmailScreen from '../commonScreens/ChangeEmailScreen';
import SettingsScreen from '../commonScreens/SettingsScreen';
import SelectLangScreen from '../commonScreens/SelectLangScreen';
import AccountSettingScreen from '../commonScreens/AccountSettingScreen';
import NotificationViewScreen from '../delivery/screens/NotificationViewScreen';
import TableReservationScreen from '../delivery/screens/TableReservationScreen';
import MyBookingScreen from '../delivery/screens/MyBookingScreen';
import RateUsScreen from '../commonScreens/RateUsScreen';
import AboutUsScreen from '../commonScreens/AboutUsScreen';
import FeedbackScreen from '../delivery/screens/FeedbackScreen';
import ProfileScreen from '../commonScreens/ProfileScreen';
import WishlistScreen from '../delivery/screens/WishlistScreen';
import PersonalDetailScreen from '../delivery/screens/PersonalDetailScreen';
import YourLocationScreen from '../delivery/screens/YourLocationScreen';
import OpenLocSettingScreen from '../delivery/screens/OpenLocSettingScreen';
import PopularSearchScreen from '../delivery/screens/PopularSearchScreen.js';
import TermsConditionScreen from '../commonScreens/TermsConditionScreen';
import OrderHistoryScreen from '../delivery/screens/OrderHistoryScreen';
import UpcomingOrderDetailScreen from '../delivery/screens/UpcomingOrderDetailScreen';
import AddressListScreen from '../delivery/screens/AddressListScreen.js';
import MyWonderPointsScreen from '../delivery/screens/MyWonderPointsScreen.js';
import ChatSupportScreen from '../delivery/screens/ChatSupportScreen.js';
import OtpProcessScreen from '../commonScreens/OtpProcessScreen';

const MainNavigator = createStackNavigator(
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
    VerificationCode: VerificationCodeScreen,
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

export default createAppContainer(MainNavigator);
