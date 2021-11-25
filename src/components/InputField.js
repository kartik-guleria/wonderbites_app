import React from 'react';
import {View, TextInput, Text} from 'react-native';
import MainStyle from '../styleSheet/MainStyle';
import Colors from '../constants/Colors';

const InputField = ({placeholder, capitalize, keyboardType, returnKeyType}) => {
  return (
    <View style={MainStyle.SectionStyle}>
      <TextInput
        style={MainStyle.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#2B2C2D"
        autoCapitalize={capitalize}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        underlineColorAndroid="#EFEFEF"
        // secureTextEntry={secureText}
        blurOnSubmit={false}
      />
    </View>
  );
};

export default InputField;
