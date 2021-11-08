import Service from '../models/service';
import Category from '../models/category';
import Product from '../models/product';
import Cuisines from '../models/cuisines';
import Ingridients from '../models/ingridients';
import AddIngridients from '../models/addIngridients';
import CartItems from '../models/cartItems';
import PaymentDetail from '../models/paymentDet';
import IngrieidientsType from '../models/ingrieidientsType';
import ProfileButtonsCategory from '../models/profile_buttons';
import Wishlist from '../models/wishList';
import SearchResult from '../models/searchResults';
import PastOrders from '../models/pastOrders';
import AddressDetail from '../models/addressDet';
import WonderPoints from '../models/wonderPoints';
export const SERVICES = [
  new Service(
    '1',
    'Delivery',
    require('../src/images/delivery.png'),
    require('../src/images/deliveryWhite.png'),
  ),
  new Service(
    '2',
    'Dine In',
    require('../src/images/dineIn.png'),
    require('../src/images/dineInWhite.png'),
  ),
  new Service(
    '3',
    'Meal Kit',
    require('../src/images/MealKit.png'),
    require('../src/images/MealKitWhite.png'),
  ),
  new Service(
    '4',
    'Meal Plan',
    require('../src/images/meal.png'),
    require('../src/images/mealWhite.png'),
  ),
  new Service(
    '5',
    'Catering',
    require('../src/images/catering.png'),
    require('../src/images/cateringWhite.png'),
  ),
  new Service(
    '6',
    'Grocery',
    require('../src/images/grocery.png'),
    require('../src/images/groceryWhite.png'),
  ),
];

export const CUISINES = [
  new Cuisines('1', 'Cuisines'),
  new Cuisines('2', 'Popular'),
  new Cuisines('3', 'Rating 5+'),
  new Cuisines('5', 'Delivery'),
];

export const SEARCHRESULT = [
  new SearchResult('1', 'Chicken'),
  new SearchResult('2', 'Burgers'),
  new SearchResult('3', 'Salads'),
  new SearchResult('4', 'Salads'),
  new SearchResult('5', 'Burrito'),
  new SearchResult('6', 'Pizzas'),
];

export const WONDERPOINTS = [
  new WonderPoints(
    '1',
    'Daily Checkin',
    'Point reward from daily check-in',
    '14-10-2021',
    '15:55',
    '+2',
    '',
    require('../src/images/wonderPointsActive.png'),
  ),
  new WonderPoints(
    '2',
    'Daily Checkin',
    'Point reward from daily check-in',
    '14-10-2021',
    '15:55',
    '+2',
    '',
    require('../src/images/wonderPointsActive.png'),
  ),
  new WonderPoints(
    '3',
    'Daily Checkin',
    'Point reward from daily check-in',
    '14-10-2021',
    '15:55',
    '+2',
    '',
    require('../src/images/wonderPointsActive.png'),
  ),
  new WonderPoints(
    '4',
    'Daily Checkin',
    'Thai Noodles, Ch...',
    '14-10-2021',
    '15:55',
    '+2',
    '[2 Products]',
    require('../src/images/noodle.png'),
  ),
  new WonderPoints(
    '5',
    'Daily Checkin',
    'Thai Noodles, Ch...',
    '14-10-2021',
    '15:55',
    '+2',
    '[2 Products]',
    require('../src/images/noodle.png'),
  ),
  new WonderPoints(
    '6',
    'Daily Checkin',
    'Thai Noodles, Ch...',
    '14-10-2021',
    '15:55',
    '+2',
    '[2 Products]',
    require('../src/images/noodle.png'),
  ),
  new WonderPoints(
    '7',
    'Thai Noodles, Ch...',
    'Completed purchase',
    '14-10-2021',
    '15:55',
    '+2',
    '[2 Products]',
    require('../src/images/noodle.png'),
  ),
];

export const ORDERHISTORYPAST = [
  new PastOrders(
    'c1',
    'Thai Noodles',
    require('../src/images/noodle.png'),
    'Noodles, Chicken, Tomato, Peppers, Lime, Lemons, Soya Sauce, Brocoli, Onions ',
    '1.400',
  ),
  new PastOrders(
    'c2',
    'Chicken Burrito',
    require('../src/images/noodle.png'),
    'Burrito, Chicken, Onions, Tomato, Sauce, Salad, Pickles, Mayo, Ketchup ',
    '1.400',
  ),
];
export const PROFILECATEGORIES = [
  new ProfileButtonsCategory(
    'c1',
    require('../src/images/profileDet.png'),
    'Personal Details',
    'PersonalDetail',
  ),
  new ProfileButtonsCategory(
    'c1',
    require('../src/images/wonderpoints.png'),
    'My wonderpoints',
    'MyWonderPoints',
  ),
  new ProfileButtonsCategory(
    'c2',
    require('../src/images/settings.png'),
    'Settings',
    'Settings',
  ),
  new ProfileButtonsCategory(
    'c3',
    require('../src/images/icon-noti.png'),
    'Notifications',
    'NotificationView',
  ),
  new ProfileButtonsCategory(
    'c3',
    require('../src/images/orderhistory.png'),
    'Order history',
    'OrderHistory',
  ),
  new ProfileButtonsCategory(
    'c4',
    require('../src/images/subs.png'),
    'My subscriptions',
    'TableReservation',
  ),
  new ProfileButtonsCategory(
    'c5',
    require('../src/images/wishlist.png'),
    'Wishlist',
    'Wishlist',
  ),
  new ProfileButtonsCategory(
    'c6',
    require('../src/images/table.png'),
    'My bookings',
    'MyBooking',
  ),
  new ProfileButtonsCategory(
    'c6',
    require('../src/images/chat1.png'),
    'Chat Support',
    'ChatSupport',
  ),
  new ProfileButtonsCategory(
    'c7',
    require('../src/images/about.png'),
    'About',
    'AboutUs',
  ),
];

export const INGRIDIENTSTYPE = [
  new IngrieidientsType('1', 'Protein'),
  new IngrieidientsType('2', 'Topping'),
  new IngrieidientsType('3', 'Dressing'),
  new IngrieidientsType('4', 'Base'),
  new IngrieidientsType('5', 'Fruit'),
];

export const CATEGORIES = [
  new Category(
    '1',
    'Burgers',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '2',
    'Burritos',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '3',
    'Noodles',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '4',
    'Pizza',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '5',
    'Salads',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '6',
    'Sanwitches',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '7',
    'Soup',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Category(
    '8',
    'Beverages',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
];

export const CARTCATEGORIES = [
  new CartItems('c1', 'Thai Noodles', 'Asian', '500ALL'),
  new CartItems('c2', 'Cheeseburger', 'Burgers', '500ALL'),
  new CartItems('c2', 'Cheeseburger', 'Burgers', '500ALL'),
];

export const WISHLIST = [
  new Wishlist('c1', 'Thai Noodles', 'Asian', '500ALL', 'Asian', '500ALL'),
  new Wishlist('c2', 'Cheeseburger', 'Burgers', '500ALL', 'Asian', '500ALL'),
  new Wishlist('c2', 'Cheeseburger', 'Burgers', '500ALL', 'Asian', '500ALL'),
  new Wishlist('c1', 'Thai Noodles', 'Asian', '500ALL', 'Asian', '500ALL'),
  new Wishlist('c2', 'Cheeseburger', 'Burgers', '500ALL', 'Asian', '500ALL'),
  new Wishlist('c2', 'Cheeseburger', 'Burgers', '500ALL', 'Asian', '500ALL'),
];
export const PAYMENTDETAIL = [
  new PaymentDetail('p1', '**** **** **** 5678', 'expires 23/26', 'Active'),
  new PaymentDetail('p2', '**** **** **** 5678', 'expires 23/26', ''),
  new PaymentDetail('p3', '**** **** **** 5678', 'expires 23/26', ''),
];

export const ADDRESSDETAIL = [
  new AddressDetail(
    '1',
    'Home',
    'Rruga e Durresit, Tirane, AL',
    'Active',
    require('../src/images/icon_home.png'),
  ),
  new AddressDetail(
    '2',
    'Office',
    'Rruga e Durresit, Tirane, AL',
    '',
    require('../src/images/icon-office.png'),
  ),
  new AddressDetail(
    '3',
    'Second Home',
    'Rruga e Durresit, Tirane, AL',
    '',
    require('../src/images/icon-other.png'),
  ),
];
export const INGRIDIENTS = [
  new Ingridients('1', 'Noodles', require('../src/images/menuItem.png')),
  new Ingridients('2', 'Limes', require('../src/images/banner.png')),
  new Ingridients('3', 'Asparagus', require('../src/images/banner.png')),
  new Ingridients('4', 'Noodles', require('../src/images/menuItem.png')),
  new Ingridients('5', 'Limes', require('../src/images/banner.png')),
  new Ingridients('6', 'Asparagus', require('../src/images/banner.png')),
  new Ingridients('7', 'Asparagus', require('../src/images/banner.png')),
];

export const ADDINGRIDIENTS = [
  new AddIngridients('1', 'Noodles', require('../src/images/menuItem.png')),
  new AddIngridients('2', 'Limes', require('../src/images/banner.png')),
  new AddIngridients('3', 'Asparagus', require('../src/images/banner.png')),
];

export const PRODUCTS = [
  new Product(
    '1',
    ['1', '2'],
    'Thai Noodles',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '2',
    ['2', '3'],
    'Cheeseburger',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '3',
    ['3', '4'],
    'Beef Burrito',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '4',
    ['1', '2', '3', '4', '5'],
    'Chicken Burrito',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '5',
    ['4', '5'],
    'Thai Noodles 1',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '6',
    ['4', '5', '6'],
    'Cheeseburger 2',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '7',
    ['4', '7', '8'],
    'Beef Burrito 3',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
  new Product(
    '8',
    ['1', '3', '5', '7', '8'],
    'Chicken Burrito 4',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
    '4.8',
    '500ALL',
    'Noodles with lime in a plate. The ingridients of this plate are : noodles, lime. .... ',
    '375 Kcal',
    'http://67.227.214.175:1337/uploads/custom_banner_49093aaaee.png',
  ),
];
