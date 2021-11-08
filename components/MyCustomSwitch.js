import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MyCustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={[
          styles.switch1,
          {backgroundColor: getSelectionMode == 1 ? selectionColor : '#FFFFFF'},
        ]}>
        <Text
          style={{
            fontSize: 12,
            color: getSelectionMode == 1 ? '#FFFFFF' : '#2B2C2D',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={[
          styles.switch2,
          {backgroundColor: getSelectionMode == 2 ? selectionColor : '#FFFFFF'},
        ]}>
        <Text
          style={{
            fontSize: 12,
            color: getSelectionMode == 2 ? '#FFFFFF' : '#2B2C2D',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default MyCustomSwitch;
const styles = StyleSheet.create({
  switchContainer: {
    height: 32,
    width: 164,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F2F3F0',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switch1: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch2: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
