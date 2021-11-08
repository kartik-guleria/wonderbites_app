import React from 'react';
import {View, TextInput, Image} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import Colors from '../constants/Colors';

const SearchBox = props => {
  return (
    <View style={MainStyle.SearchStyle}>
      <Image
        style={{
          width: 15,
          height: 15,
          alignSelf: 'center',
          resizeMode: 'contain',
          marginLeft: 10,
          marginRight: 10,
        }}
        source={require('../src/images/Search.png')}
      />
      <TextInput
        style={MainStyle.searchField}
        placeholder={props.placeholder}
        placeholderTextColor="#A2A2A2"
        autoCapitalize={props.capitalize}
        keyboardType={props.keyboardType}
        returnKeyType="search"
        underlineColorAndroid="#EFEFEF"
        secureTextEntry="false"
        blurOnSubmit={false}
      />
    </View>
  );
};

export default SearchBox;
