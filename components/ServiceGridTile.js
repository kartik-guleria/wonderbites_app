import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../constants/Colors';

const ServiceGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp style={styles.productItem} onPress={props.onSelect}>
      <View
        style={{
          ...styles.container,
          ...{
            backgroundColor:
              props.menuIndex == 1 ? Colors.primaryColor : '#FFFFFF',
          },
        }}>
        <Image
          style={styles.itemImage}
          source={props.menuIndex == 1 ? props.selectedImage : props.menuImage}
        />
        <Text
          style={[
            styles.itemText,
            {color: props.menuIndex == 1 ? '#FFFFFF' : Colors.primaryColor},
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 170,
  },
  itemImage: {
    justifyContent: 'flex-end',
    width: 85,
    height: 85,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 10,
  },
  itemText: {
    alignContent: 'center',
    fontSize: 20,
    color: '#E91E05',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: '500',
    paddingBottom: 21,
  },
  container: {
    flex: 1,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default ServiceGridTile;
