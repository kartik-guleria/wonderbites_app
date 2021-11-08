import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
const EmptyCartScreen = props => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <UnderlineView />
      <View style={styles.screen}>
        <Image
          source={require('../src/images/EmptyCart.png')}
          style={styles.image}
        />

        <Text style={styles.sectionDescription}>
          You don’t have any orders yet !
        </Text>
      </View>
    </View>
  );
};

export default EmptyCartScreen;
EmptyCartScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> My Bag </Text>,
  headerLeft: null,
};
const styles = StyleSheet.create({
  image: {
    height: 145,
    width: 143,
    marginLeft: -20,
    alignSelf: 'center',
    resizeMode: 'contain',
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
    fontSize: 18,
    color: '#2B2C2D',
    height: 200,
    fontWeight: '500',
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
    fontFamily: 'Gotham',
    alignSelf: 'center',
  },
  screen: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
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
});
