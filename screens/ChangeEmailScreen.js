import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import Colors from '../constants/Colors';
import WaterMarkView from '../components/WaterMarkView';
import UnderlineView from '../components/underlineView';
const ChangeEmailScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View style={{margin: 28, marginTop: 0}}>
        <Text style={[MainStyles.descTextLight, {textAlign: 'left'}]}>
          To change your email go to
        </Text>
        <Text
          style={[
            MainStyles.descTextLight,
            {color: Colors.primaryColor, textAlign: 'left'},
          ]}>
          https://wonderbites.app/
        </Text>
      </View>
      <WaterMarkView />
    </View>
  );
};

export default ChangeEmailScreen;
ChangeEmailScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Settings </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
