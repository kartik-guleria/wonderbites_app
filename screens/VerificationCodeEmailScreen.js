import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VerificationCodeEmailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Verification Code Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerificationCodeEmailScreen;
