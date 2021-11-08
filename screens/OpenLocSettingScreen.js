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
const OpenLocSettingScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={styles.screen}>
          <Image
            source={require('../src/images/icon-location.png')}
            style={styles.image}
          />

          <Text style={styles.sectionTitle}>Where are you?</Text>
          <View style={{width: '100%', justifyContent: 'center'}}>
            <Text style={styles.sectionDescription}>
              You’ll need to enable your location in order to deliver the food
              to you. Open the settings and allow access.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 10,
          width: '100%',
        }}>
        <View style={{marginLeft: 10, marginRight: 10}}>
          <MyButton
            title="Open Settings"
            //   onSelect={() => {
            //     props.navigation.navigate('TrackOrder');
            //   }}
          />
        </View>
      </View>
    </View>
  );
};

export default OpenLocSettingScreen;
OpenLocSettingScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={MainStyles.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  image: {
    marginTop: 110,
    height: 96,
    width: 96,
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
    fontFamily: 'Gotham',
    letterSpacing: 0.87,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#8E8E93',
    marginTop: 16,
    fontFamily: 'Gotham-Light',
    marginLeft: 47,
    marginRight: 47,
    textAlign: 'center',
    letterSpacing: 0.24,
    lineHeight: 20,
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
