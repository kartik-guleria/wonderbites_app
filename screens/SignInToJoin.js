import * as React from 'react';
import MainStyles from '../src/styleSheet/MainStyle';
import AppColor from '../constants/Colors';
import MyButton from '../components/MyButton';
import BoxShadow from '../components/BoxShadow';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Keyboard,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const SignInToJoin = props => {
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style={MainStyles.mainBody}>
        <View
          style={{
            height: 52,
            marginTop: 30,
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 22,
              fontWeight: '500',
            }}>
            Choose an option to
          </Text>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 22,
              fontWeight: '500',
            }}>
            log in
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignself: 'center',
            height: 49,
            borderColor: '#DDDDDD',
            borderWidth: 1,
            borderRadius: 12,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 36,
            alignItems: 'center',
          }}>
          <Image
            source={require('../src/images/country.png')}
            style={{
              marginLeft: 12,
              width: 25,
              height: 20,
              resizeMode: 'contain',
              borderRadius: 3,
              backgroundColor: AppColor.primaryColor,
            }}
          />

          <Text style={MainStyles.inputPhone}>+355</Text>

          <Image
            style={{
              marginLeft: 5,
              width: 10,
              height: 10,
              resizeMode: 'contain',
            }}
            source={require('../src/images/downArr.png')}

            //onPress={() => alert('Login with Facebook')}
          />

          <TextInput
            style={MainStyles.inputPhone}
            keyboardType="number-pad"
            maxLength={16}></TextInput>
        </View>
        <View style={{margin: 8, marginTop: 10}}>
          <MyButton
            title="Send OTP"
            onSelect={() => {
              props.navigation.navigate('VerificationCode');
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginLeft: 16, marginRight: 16}}>
          <View
            style={{
              backgroundColor: '#EFEFEF',
              width: '42%',
              marginRight: 4,
              height: 1,
            }}></View>
          <Text
            style={{
              width: '8%',
              height: 17,
              marginLeft: 15,
              marginRight: 4,
              marginTop: -5,
              color: '#2B2C2D',
              fontSize: 16,
              fontFamily: 'Gotham-Light',
            }}>
            OR
          </Text>
          <View
            style={{
              backgroundColor: '#EFEFEF',
              marginLeft: 12,
              width: '42%',
              height: 1,
              // marginTop: 10,
            }}></View>
        </View>
        <View style={MainStyles.BoxShadow}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('SignIn')}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  height: 49,
                  borderColor: '#EFEFEF',
                  borderWidth: 1,
                  borderRadius: 12,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 18,
                }}>
                <Image
                  source={require('../src/images/sendEmail.png')}
                  style={{
                    width: 20,
                    height: 16,
                    alignItems: 'flex-start',
                    resizeMode: 'contain',
                    marginLeft: 20,
                    width: '8%',
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Gotham-Light',
                    width: '92%',
                    color: '#2B2C2D',
                    marginLeft: -30,
                    textAlign: 'center',
                  }}>
                  Continue with Email
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginTop: 20,
            marginRight: 20,
          }}>
          <View
            style={[
              MainStyles.BoxShadow,
              {
                width: '45%',
                height: 49,
              },
            ]}>
            <TouchableOpacity
              style={{
                height: 49,
                borderWidth: 1,
                borderRadius: 12,
                alignItems: 'center',
                borderColor: '#EFEFEF',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../src/images/facebook-blue.png')}
                  style={{marginLeft: 12, width: 25, height: 25}}
                />

                <Text
                  style={{
                    margin: 5,
                    fontSize: 16,
                    fontFamily: 'Gotham-Light',
                    color: '#2B2C2D',
                  }}>
                  {' '}
                  Facebook{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              MainStyles.BoxShadow,
              {
                width: '45%',
                height: 49,
              },
            ]}>
            <TouchableOpacity
              style={{
                borderColor: '#EFEFEF',
                borderWidth: 1,
                height: 49,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignself: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../src/images/google.png')}
                  style={{width: 24, height: 24}}
                />
                <View style={{marginLeft: 17, marginTop: 5}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Gotham-Light',
                      color: '#2B2C2D',
                    }}>
                    Google
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInToJoin;
SignInToJoin.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/cross-black.png')}
      style={{width: 20, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
