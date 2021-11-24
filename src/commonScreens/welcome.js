import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import MyGrayButton from '../components/MyGrayButton';
import MainStyle from '../styleSheet/MainStyle';
import Geolocation from '@react-native-community/geolocation';

const welcome = props => {
  Geolocation.getCurrentPosition(data => console.warn(data));
  console.warn('Geolocation');
  return (
    <SafeAreaView style={MainStyle.safeAreaContainer}>
      <StatusBar barStyle="light-content" />

      <View
        style={{
          backgroundColor: '#E1251B',
          height: '100%',
        }}>
        <ImageBackground
          source={require('../images/Main.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SideMenu')}>
              <Image
                source={require('../images/drawer.png')}
                style={{width: 23, height: 14, marginLeft: 16}}
              />
            </TouchableOpacity>
            <Image
              source={require('../images/whiteLogo.png')}
              style={{
                width: 152,
                height: 18,
                alignSelf: 'center',
                resizeMode: 'contain',
                marginTop: 5,
              }}
            />
          </View>
          <View style={{width: '100%', height: '65%'}} />
          <TouchableOpacity
            style={[
              styles.buttonStyleRed,
              {
                borderColor: '#FFFFFF',
                borderWidth: 1,
                marginBottom: 10,
                marginTop: 5,
              },
            ]}
            onPress={() => props.navigation.navigate('SignIn')}>
            <View>
              <Text style={styles.text_color}>Sign in or join</Text>
            </View>
          </TouchableOpacity>

          <MyGrayButton
            title="Order Now"
            onSelect={() => {
              props.navigation.navigate('AskAddress');
            }}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
welcome.navigationOptions = {title: 'Welcome', headerShown: false};
const styles = StyleSheet.create({
  buttonStyleRed: {
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text_color: {
    color: '#FFFFFF',
    fontFamily: 'Gotham',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default welcome;
