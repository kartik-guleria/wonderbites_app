import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MainStyle from '../../styleSheet/MainStyle';
const TrackOrderScreen = props => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../../images/trackMap.png')}
        style={styles.image}
      />

      <View
        style={{
          bottom: 0,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 2,
          elevation: 1,
        }}>
        <View
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 5,
            marginBottom: 30,
          }}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.foodName, {fontSize: 18}]}>Delivery Time</Text>
            <View
              style={{
                backgroundColor: '#DDDDDD',
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 10, height: 10, color: 'red'}}
                source={require('../../images/cross.png')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 8,
            }}>
            <Image
              style={{
                width: 19,
                height: 19,
                marginRight: 20,
                resizeMode: 'contain',
              }}
              source={require('../../images/time_Black.png')}
            />
            <Text style={{fontSize: 20, fontWeight: '700'}}>22 Min</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 20,
              marginBottom: 1,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 20,

                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../images/circleTick.png')}
            />
            <View>
              <Text style={styles.foodName}>Order confirmed</Text>
              <Text style={styles.classification}>
                Your order has been received.
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 26,
              marginBottom: 16,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../images/circleTick.png')}
            />
            <View>
              <Text style={styles.foodName}>Order prepared</Text>
              <Text style={styles.classification}>
                Your order has been prepared
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 16,
              marginBottom: 30,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../images/waiting.png')}
            />
            <View>
              <Text style={styles.foodName}>Delivery in progess</Text>
              <Text style={styles.classification}>
                Hang on ! Your food is on the way
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
TrackOrderScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Edit Details</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
export default TrackOrderScreen;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    alignSelf: 'flex-start',
    resizeMode: 'cover',
  },
  classification: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: 12,
    color: '#2B2C2D',
    fontFamily: 'Gotham-Light',
    fontStyle: 'normal',
  },
  foodName: {
    textAlign: 'left',
    fontSize: 14,
    color: '#2B2C2D',
    // marginTop: 15,
    alignSelf: 'flex-start',
    // fontFamily: 'gotham',
    fontStyle: 'normal',
    fontWeight: '700',
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
  imageIcon: {
    width: 45,
    height: 30,
    resizeMode: 'contain',
  },
  sectionDescription: {
    fontSize: 18,
    color: '#2B2C2D',
    fontWeight: '200',
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    // width: 320,
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
});
