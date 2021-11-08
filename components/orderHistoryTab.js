import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const orderHistoryTab = ({
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
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View style={{width: '50%'}}>
        <TouchableOpacity
          style={{width: '100%'}}
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}>
          <Text
            style={[
              styles.tab,
              {color: getSelectionMode == 1 ? '#2B2C2D' : '#C4C4C4'},
            ]}>
            {option1}
          </Text>
          <View
            style={[
              styles.line,
              {backgroundColor: getSelectionMode == 1 ? '#E1251B' : '#F2F2F2'},
            ]}></View>
        </TouchableOpacity>
      </View>

      <View style={{width: '50%'}}>
        <TouchableOpacity
          style={{width: '100%'}}
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}>
          <Text
            style={[
              styles.tab,
              {color: getSelectionMode == 2 ? '#2B2C2D' : '#C4C4C4'},
            ]}>
            {option2}
          </Text>
          <View
            style={[
              styles.line,
              {backgroundColor: getSelectionMode == 2 ? '#E1251B' : '#F2F2F2'},
            ]}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default orderHistoryTab;

const styles = StyleSheet.create({
  tab: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15.31,
    fontFamily: 'Gotham',
    alignSelf: 'center',
  },
  line: {
    marginTop: 7,
    height: 3,
    width: '100%',
  },
});
