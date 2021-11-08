import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyles from '../src/styleSheet/MainStyle';
const OrderCompleteScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            source={require('../src/images/track.png')}
            style={styles.image}
          />

          <Text style={styles.sectionTitle}>Your order is on the way</Text>
          <View style={{width: '100%', justifyContent: 'center'}}>
            <Text style={styles.sectionDescription}>
              Thank you for your order. You can track the order in the orders
              section
            </Text>
          </View>

          <View style={styles.deliveryView}>
            <Text style={styles.deliveryTime}>Estimated delivery time: </Text>
            <Text style={styles.deliveryTime}>20min</Text>
          </View>
          <View
            style={{
              bottom: 0,
              width: '100%',
              paddingTop: 140,
            }}>
            <View
              style={{
                marginBottom: 0,
                width: '100%',
              }}>
              <View style={{marginLeft: 10, marginRight: 10}}>
                <MyButton
                  title="Track My Order"
                  onSelect={() => {
                    props.navigation.navigate('TrackOrder');
                  }}
                />
              </View>
              <TouchableOpacity onPress={props.onSelect}>
                <View>
                  <Text style={styles.text_color}>Order Again</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderCompleteScreen;
OrderCompleteScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/cross-black.png')}
      style={{width: 20, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    height: 227,
    width: 274,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    // width: Dimensions.get('window').width,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#2B2C2D',
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    // width: 223,
  },
  sectionDescription: {
    fontSize: 18,
    color: '#2B2C2D',
    marginTop: 16,
    fontFamily: 'Gotham-Light',
    marginLeft: 16,
    marginRight: 16,
    alignSelf: 'center',
    textAlign: 'left',
    alignSelf: 'center',
  },

  deliveryView: {
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 105,
    marginRight: 90,
    alignSelf: 'center',
  },

  deliveryTime: {
    fontSize: 12,
    color: '#2B2C2D',
    fontWeight: '400',
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: 'red',
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 140,
    marginLeft: 16,
    marginRight: 16,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  buttonText1: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
  },
  button2: {
    marginTop: 27,
    marginLeft: 133,
    marginRight: 134,
    marginBottom: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    color: '#2B2C2D',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
  },
  text_color: {
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 17.23,
    alignSelf: 'center',
  },
});
