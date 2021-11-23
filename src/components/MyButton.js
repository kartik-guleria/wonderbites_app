import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import Colors from '../constants/Colors';

const MyButton = props => {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOpacity: 0.24,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
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

export default MyButton;

const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 49,
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 25,
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  text_color: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
