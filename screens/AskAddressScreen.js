import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../src/styleSheet/MainStyle';
import MyGrayButton from '../components/MyGrayButton';
import SearchBox from '../components/SearchBox';
const AskAddressScreen = props => {
  return (
    <View style={MainStyle.MainContainerLight}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../src/images/Mapbg.png')}
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      />
      <View
        style={{
          top: 64,
          position: 'absolute',
          width: '100%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          // style={[styles.buttonStyleGray, {width: '40%'}]}
          onPress={() => {
            props.navigation.navigate('WelcomeN');
          }}>
          <Image
            style={{
              width: 12,
              height: 21,
              alignSelf: 'flex-start',
              resizeMode: 'contain',
              marginLeft: 16,
            }}
            source={require('../src/images/back.png')}
          />
        </TouchableOpacity>
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: -60,
              fontWeight: '500',
              color: '#2B2C2D',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Gotham-Light',
            }}>
            Choose Location
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          marginTop: 105,
          height: 49,
          borderRadius: 5,
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 4,
          elevation: 1,
        }}>
        <SearchBox
          placeholder="Search"
          capitalize="none"
          keyboardType="default"
        />
      </View>
      <View
        style={[
          MainStyle.addressButtonView,
          {
            marginTop: 20,
            bottom: 0,
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: 12,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
          },
        ]}>
        <View
          style={{
            width: 40,
            height: 4,
            alignSelf: 'center',
            backgroundColor: '#000000',
            borderRadius: 2,
            marginTop: 12,
            marginBottom: 10,
          }}></View>
        <MyGrayButton
          title="Enter Address Details"
          onSelect={() => {
            // props.navigation.navigate();
          }}
        />

        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            marginTop: -20,
          }}>
          <MyButton
            title="Add Address"
            onSelect={() => {
              props.navigation.navigate('AddAddress');
            }}
          />
        </View>
      </View>
    </View>
    // </View>
  );
};
export default AskAddressScreen;
AskAddressScreen.navigationOptions = {
  title: 'Ask Address',
  headerShown: false,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
