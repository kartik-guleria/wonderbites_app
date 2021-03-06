import React from 'react';
import {
  MainStyleheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Button,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../src/styleSheet/MainStyle';
import InputField from '../components/InputField';
const SignInScreen = props => {
  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <View style={{margin: 10}}>
        {/* <KeyboardAvoidingView enabled> */}
        <InputField
          placeholder="Email"
          capitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          secureText="false"
        />
        <InputField
          placeholder="Password"
          capitalize="none"
          keyboardType="default"
          returnKeyType="next"
          secureText="true"
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ResetPassword')}>
          <Text
            style={[
              MainStyle.registerTextStyleRed,
              {
                alignSelf: 'flex-end',
                margin: 2,
                marginBottom: 10,
                fontSize: 12,
                fontFamily: 'Gotham-Light',
              },
            ]}>
            forgot your password?
          </Text>
        </TouchableOpacity>
        <MyButton
          title="Log In"
          onSelect={() => {
            props.navigation.navigate('Home');
          }}
        />

        <TouchableOpacity
          style={{marginTop: -12}}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text
            style={MainStyle.registerTextStyle}
            // onPress={() => navigation.navigate('RegisterScreen')}
          >
            Don’t have an account ?
            <Text style={MainStyle.registerTextStyleRed}> Sign up </Text>
          </Text>
        </TouchableOpacity>

        {/* </KeyboardAvoidingView> */}
      </View>
    </View>
  );
};
SignInScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Log in </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
  // headerRight: () => (
  //   <Button
  //     onPress={() => alert('This is a button!')}
  //     title="Info"
  //     color="#000"
  //   />
  // ),
};

export default SignInScreen;
