import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import MyButton from '../../components/MyButton';
import MyGrayButton from '../../components/MyGrayButton';
import MainStyles from '../../styleSheet/MainStyle';
const ChooseOptionScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      {/* <ScrollView> */}
      <View style={styles.screen}>
        <Image
          source={require('../../images/checkComp.gif')}
          style={styles.image}
        />

        <Text style={styles.sectionDescription}>Product added to bag</Text>
        <View
          style={{
            marginBottom: 0,
            width: '100%',
            paddingTop: 130,
          }}>
          <View
            style={{
              marginBottom: 0,
              width: '100%',
            }}>
            <MyGrayButton
              title="Continue Shopping"
              onSelect={() => {
                props.navigation.navigate('Home');
              }}
            />
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: -20,
                marginBottom: 50,
              }}>
              <MyButton
                title="Proceed to Checkout"
                onSelect={() => {
                  props.navigation.navigate('Cart');
                }}
              />
            </View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default ChooseOptionScreen;
ChooseOptionScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> </Text>,
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
    marginTop: 60,
    height: 300,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
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
    marginTop: 20,
    marginLeft: 90,
    marginRight: 90,
    alignSelf: 'center',
    // width: 223,
  },
  sectionDescription: {
    fontSize: 22,
    color: '#2B2C2D',
    // marginLeft: 35,
    // marginLeft: 35,
    marginBottom: 30,
    marginTop: 20,
    lineHeight: 25.78,
    alignSelf: 'center',
    fontFamily: 'Gotham-Light',
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
