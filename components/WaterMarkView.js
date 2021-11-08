import React from 'react';
import {Image, View} from 'react-native';
import {abs} from 'react-native-reanimated';

const WaterMarkView = props => {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 15,
        marginBottom: 30,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../src/images/waterMark-logo.png')}
        style={{width: 100, height: 20, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default WaterMarkView;
