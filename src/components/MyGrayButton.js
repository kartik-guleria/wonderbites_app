import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import Colors from '../constants/Colors';

const MyGrayButton = props => {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOpacity: 0.12,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        // elevation: 2,
        paddingTop: 10,
        // overflow: 'hidden',
      }}>
      <TouchableOpacity style={styles.buttonStyleRed} onPress={props.onSelect}>
        <View>
          <Text style={styles.text_color}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyGrayButton;

const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: '#FFFFFF',
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    justifyContent: 'center',
  },
  text_color: {
    color: '#2B2C2D',
    fontFamily: 'Gotham-Light',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 17.23,
  },
});
