import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import MyButton from '../components/MyButton';
import styles from '../styleSheet/MainStyle';
import InputField from '../components/InputField';
import MainStyle from '../styleSheet/MainStyle';
const ResetPasswordScreen = props => {
  return (
    <View style={styles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#EFEFEF',
          marginTop: 10,
          marginBottom: 6,
        }}></View>
      <View
        style={[
          styles.MainContainerLight,
          {marginLeft: 15, paddingTop: 10, marginRight: 15},
        ]}>
        <Text
          style={[
            styles.headingDesc,
            {
              textAlign: 'left',
              fontWeight: '500',
              fontFamily: 'Gotham',
              fontSize: 25,
              marginBottom: 18,
            },
          ]}>
          Reset Password
        </Text>
        <Text style={[styles.descText, {textAlign: 'left'}]}>
          Enter the email associated with your account and we will send an email
          with instructions to reset your password
        </Text>
        <View style={{marginBottom: 25}}>
          <InputField
            placeholder="Email"
            capitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            secureText="false"
          />
        </View>

        <MyButton
          title="Send Instructions"
          // onSelect={() => {
          //   props.navigation.navigate('ResetPassword');
          // }}
        />
        {/* </KeyboardAvoidingView> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default ResetPasswordScreen;
ResetPasswordScreen.navigationOptions = {
  headerTitle: <Text style={styles.headerTitle}> Reset Password </Text>,
  headerBackImage: (
    <Image
      source={require('../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};
