import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import UnderLiveView from '../components/underlineView';
const headerRight = props => {
  console.log(props);
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          marginTop: 20,
        }}>
        <View>
          <Image
            source={require('../images/smallLogo.png')}
            style={{
              width: 135,
              height: 30,
              marginLeft: 17,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/Loc-Black.png')}
            style={{
              width: 17,
              height: 21,
              marginLeft: 20,
              resizeMode: 'contain',
            }}
          />

          <Image
            source={require('../images/glass.png')}
            style={{
              width: 20,
              height: 20,
              marginLeft: 20,
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <Image
              source={require('../images/profileIcon.png')}
              style={{
                width: 28,
                height: 28,
                marginLeft: 15,
                marginRight: 15,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <UnderLiveView />
    </View>
  );
};

export default headerRight;
