import React from 'react';
import {View, TextInput, Text} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import Colors from '../constants/Colors';

const InputField = props => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={MainStyle.inputStyle}>
        {props.title}
        <Text style={{color: Colors.primaryColor}}>*</Text>
      </Text>
      <TextInput
        style={[
          MainStyle.inputStyle,
          {height: 20, marginTop: 16, fontWeight: 'bold'},
        ]}
        autoCapitalize={props.capitalize}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        underlineColorAndroid="#EFEFEF"
        secureTextEntry={props.secureText}
        blurOnSubmit={false}
      />
    </View>
  );
};

export default InputField;
