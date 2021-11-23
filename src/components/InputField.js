import React from 'react';
import {View, TextInput, Text} from 'react-native';
import MainStyle from '../styleSheet/MainStyle';
import Colors from '../constants/Colors';

const InputField = props => {
  return (
    <View style={MainStyle.SectionStyle}>
      <TextInput
        style={MainStyle.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor="#2B2C2D"
        autoCapitalize={props.capitalize}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        underlineColorAndroid="#EFEFEF"
        // secureTextEntry={secureText}
        blurOnSubmit={false}
      />
    </View>
  );
};

export default InputField;
