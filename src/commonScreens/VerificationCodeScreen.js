import React from 'react';
import {TextInput, View, Text, Image, KeyboardAvoidingView} from 'react-native';
import Mainstyles from '../styleSheet/MainStyle';
import MyButton from '../components/MyButton';
const VerificationCodeScreen = props => {
  return (
    <View style={Mainstyles.screen}>
      <View style={Mainstyles.MainContainerLight}>
        <KeyboardAvoidingView enabled>
          <View>
            <Text
              style={[
                Mainstyles.headingDescTwo,
                {
                  marginLeft: 70,
                  marginRight: 70,
                  marginTop: 70,
                  marginBottom: 30,
                },
              ]}>
              We sent you a code to your phone number
            </Text>

            <Text style={Mainstyles.descText}>Sent to (+355 69 69 69 699)</Text>
          </View>
          <View
            style={[Mainstyles.ChooseType, {marginTop: 30, marginBottom: 20}]}>
            <View style={{height: 70}}>
              <TextInput
                value="3"
                style={[Mainstyles.otpTextBox, {fontSize: 22}]}
                placeholderTextColor="#000000"
                keyboardType="number-pad"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View>
              <TextInput
                style={[Mainstyles.otpTextBox, {fontSize: 22}]}
                placeholderTextColor="#000000"
                keyboardType="number-pad"
                returnKeyType="next"
                value="3"
                blurOnSubmit={false}
              />
            </View>
            <View>
              <TextInput
                value="3"
                style={[Mainstyles.otpTextBox, {fontSize: 22}]}
                placeholderTextColor="#000000"
                keyboardType="number-pad"
                returnKeyType="next"
                underlineColorAndroid="#EFEFEF"
                blurOnSubmit={false}
              />
            </View>
            <View>
              <TextInput
                value="3"
                style={[Mainstyles.otpTextBox, {fontSize: 22}]}
                placeholderTextColor="#000000"
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
          </View>

          <Text
            style={[
              Mainstyles.descText,
              {fontWeight: '500', color: '#E91E05', paddingTop: 10},
            ]}>
            Verification code is invalid.
          </Text>

          <Text style={[Mainstyles.headingDescTwo, {paddingTop: 10}]}>
            Try Again
          </Text>
        </KeyboardAvoidingView>
      </View>
      <View style={{bottom: 90, width: '100%', backgroundColor: '#dddddd'}}>
        <View
          style={[Mainstyles.addressButtonView, {justifyContent: 'center'}]}>
          <View
            style={{
              width: 80,
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: 30,
              marginTop: 10,
            }}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../images/time_Black.png')}
            />
            <Text
              style={[
                Mainstyles.descText,
                {lineHeight: 15, fontWeight: '500'},
              ]}>
              00:59
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
            }}>
            <MyButton
              title="Submit"
              onSelect={() => {
                props.navigation.navigate('OtpProcess');
              }}
            />
          </View>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default VerificationCodeScreen;
VerificationCodeScreen.navigationOptions = {
  headerTitle: <Text style={Mainstyles.headerTitle}>Verification Code</Text>,
  headerBackImage: (
    <Image
      source={require('../images/back.png')}
      style={Mainstyles.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};