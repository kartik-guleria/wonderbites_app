import React from 'react';
import {View} from 'react-native';

const BoxShadow = props => {
  return (
    <View
      style={{
        shadowColor: '#000000',
        shadowOpacity: 0.36,
        shadowRadius: 12,
        // overflow: 'scroll',
        shadowOffset: {width: 0, height: 2},
        elevation: 1,
      }}></View>
  );
};

export default BoxShadow;
