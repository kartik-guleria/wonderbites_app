import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../styleSheet/MainStyle';
import InputField from '../components/InputField';
const OtpProcessScreen = props => {
  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <View style={{margin: 10}}>
        <Text
          style={[
            MainStyle.headingDescTwo,
            {
              marginLeft: 16,
              marginRight: 16,
              marginTop: 20,
              marginBottom: 10,
              textAlign: 'left',
            },
          ]}>
          Tell us more about yourself
        </Text>
        {/* <KeyboardAvoidingView enabled> */}
        <InputField
          placeholder="Full Name*"
          capitalize="none"
          keyboardType="default"
          returnKeyType="next"
          secureText="false"
        />
        <InputField
          placeholder="Email*"
          capitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          secureText="false"
        />
        <View style={{marginTop: 20}}>
          <MyButton
            title="Register"
            onSelect={() => {
              props.navigation.navigate('SignUp');
            }}
          />
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </View>
  );
};
OtpProcessScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Personal Details </Text>,
  headerBackImage: (
    <Image
      source={require('../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

export default OtpProcessScreen;
