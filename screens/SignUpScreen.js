import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../src/styleSheet/MainStyle';
import InputField from '../components/InputField';
const SignUpScreen = props => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="dark-content" />
      <View style={MainStyle.mainBody}>
        {/* <Loader loading={loading} /> */}

        <View style={{margin: 8}}>
          {/* <KeyboardAvoidingView enabled> */}
          <InputField
            placeholder="Name*"
            capitalize="words"
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
          <InputField
            placeholder="Contact Number*"
            capitalize="none"
            keyboardType="number-pad"
            returnKeyType="next"
            secureText="false"
          />

          <View style={MainStyle.SectionStyle}>
            <TextInput
              style={[
                MainStyle.inputStyle,
                {height: Platform.OS == 'android' ? 40 : 20},
              ]}
              placeholder="Password*"
              placeholderTextColor="#2B2C2D"
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              underlineColorAndroid="#EFEFEF"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          <View style={MainStyle.SectionStyle}>
            <TextInput
              style={MainStyle.inputStyle}
              placeholder="Confirm Password*"
              placeholderTextColor="#2B2C2D"
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              underlineColorAndroid="#EFEFEF"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>

          {/* <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={MainStyle.checkbox}
      /> */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              marginBottom: 30,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: 12,
                alignSelf: 'center',
                justifyContent: 'center',
                resizeMode: 'contain',
              }}
              source={require('../src/images/checkBox.png')}
            />
            <View style={{alignContent: 'center'}}>
              <Text style={MainStyle.registerTextStyle}>
                I agree with our
                <TouchableOpacity
                  style={{
                    marginBottom: -8,
                  }}
                  onPress={() => props.navigation.navigate('TermsCondition')}>
                  <Text style={MainStyle.registerTextStyleRed}> Terms </Text>
                </TouchableOpacity>
                and
                <Text style={MainStyle.registerTextStyleRed}> Conditions </Text>
              </Text>
            </View>
          </View>

          <MyButton
            title="Register"
            onSelect={() => {
              props.navigation.navigate('SignIn');
            }}
          />

          <TouchableOpacity
            style={{marginTop: -15}}
            activeOpacity={0.5}
            onSelect={() => {
              props.navigation.navigate('SignIn');
            }}>
            <Text
              style={MainStyle.registerTextStyle}
              // onPress={() => navigation.navigate('RegisterScreen')}
            >
              Already have an account ?
              <Text style={MainStyle.registerTextStyleRed}> Log in </Text>
            </Text>
          </TouchableOpacity>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUpScreen;

SignUpScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Sign up </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
