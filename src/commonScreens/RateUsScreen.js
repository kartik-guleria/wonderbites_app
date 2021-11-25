import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import MainStyles from '../styleSheet/MainStyle';
import MyButton from '../components/MyButton';
import UnderlineView from '../components/underlineView';

const RateUsScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View style={{margin: 20}}>
        <Image source={require('../images/RateUs.png')} style={styles.image} />
        <Text
          style={[
            MainStyles.headerTitle,
            {marginTop: 50, textAlign: 'center'},
          ]}>
          Your opinion matters to us!
        </Text>
        <View
          style={[
            MainStyles.descText,
            {marginTop: 20, marginLeft: 35, marginRight: 35, fontSize: 12},
          ]}>
          <Text style={[MainStyles.descText, {fontSize: 12}]}>
            We work super hard to make Wonderbites
          </Text>
          <Text style={[MainStyles.descText, {fontSize: 12}]}>
            {' '}
            better for you, and we would love to know:
          </Text>
          <Text style={[MainStyles.descText, {fontSize: 12}]}>
            {' '}
            How would you rate our app?
          </Text>
        </View>
        <Image
          source={require('../images/ratings.png')}
          style={styles.rateImage}
        />
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          marginBottom: 50,
        }}>
        <View style={{marginLeft: 10, marginRight: 10}}>
          <MyButton
            title="Submit"
            onSelect={() => {
              props.navigation.navigate('OrderComplete');
            }}
          />
        </View>
        <View>
          <Text
            style={[
              MainStyles.rateText,
              {fontWeight: '400', marginTop: -5, textAlign: 'center'},
            ]}>
            No Thanks
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RateUsScreen;
RateUsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Rate Us </Text>,
  headerBackImage: (
    <Image
      source={require('../images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  image: {
    height: 156,
    width: 236,
    marginLeft: -20,
    marginTop: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  rateImage: {
    height: 30,
    width: 185,
    marginLeft: -20,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
