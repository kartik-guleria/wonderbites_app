import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import MyButton from '../../components/MyButton';
import MyGrayButton from '../../components/MyGrayButton';
import MainStyles from '../../styleSheet/MainStyle';
const CheckoutCompleteScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            source={require('../../images/orderComp.gif')}
            style={styles.image}
          />

          <Text style={styles.sectionDescription}>Order has been placed</Text>

          <View
            style={{
              marginBottom: 0,
              width: '100%',
              paddingTop: 150,
            }}>
            <View
              style={{
                marginBottom: 0,
                width: '100%',
              }}>
              <MyGrayButton
                title="Continue Shopping"
                onSelect={() => {
                  props.navigation.navigate('EmptyCart');
                }}
              />
              <View style={{marginLeft: 10, marginRight: 10, marginTop: -20}}>
                <MyButton
                  title="Track My Order"
                  onSelect={() => {
                    props.navigation.navigate('OrderComplete');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutCompleteScreen;
CheckoutCompleteScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}>Order Completed </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/cross-black.png')}
      style={{width: 30, height: 30, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#2B2C2D',
    fontWeight: '700',
    marginTop: 49,
    marginLeft: 90,
    marginRight: 90,
    alignSelf: 'center',
    // width: 223,
  },
  sectionDescription: {
    fontSize: 22,
    color: '#2B2C2D',
    fontWeight: '200',
    // marginTop: -4,
    marginLeft: 35,
    marginRight: 35,

    alignSelf: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  deliveryView: {
    flexDirection: 'row',
    marginTop: 22,
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
});
