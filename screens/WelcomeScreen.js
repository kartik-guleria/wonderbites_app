import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton';
import MainStyle from '../src/styleSheet/MainStyle';

const WelcomeScreen = props => {
  return (
    <View style={MainStyle.screen}>
      <Text>The Welcome Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <View>
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <View style={MainStyle.btn_parent}>
        <MyButton
          title="Choose Option"
          onSelect={() => {
            props.navigation.navigate('ChooseOption');
          }}
        />
        <MyButton
          title="Banner"
          onSelect={() => {
            props.navigation.navigate('Banner');
          }}
        />
        <MyButton
          title="Reset Password"
          onSelect={() => {
            props.navigation.navigate('ResetPassword');
          }}
        />
        <MyButton
          title="Checkout Complete"
          onSelect={() => {
            props.navigation.navigate('CheckoutComplete');
          }}
        />
        <MyButton
          title="SignUp"
          onSelect={() => {
            props.navigation.navigate('SignUp');
          }}
        />
        <MyButton
          title="Welcome"
          onSelect={() => {
            props.navigation.navigate('WelcomeN');
          }}
        />
        <MyButton
          title="Order Complete"
          onSelect={() => {
            props.navigation.navigate('OrderComplete');
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
