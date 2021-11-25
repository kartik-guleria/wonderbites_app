import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../styleSheet/MainStyle';
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

        <View style={MainStyle.SectionStyle}>
          <TextInput
            style={MainStyle.inputStyle}
            placeholder="Password"
            placeholderTextColor="#2B2C2D"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="done"
            underlineColorAndroid="#EFEFEF"
            secureTextEntry={true}
            blurOnSubmit={false}
          />
        </View>

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
            props.navigation.navigate('DeliveryTabs');
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
      source={require('../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

export default SignInScreen;
