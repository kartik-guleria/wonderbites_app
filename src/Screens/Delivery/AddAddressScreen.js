import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import MyButton from '../../components/MyButton';
import MainStyle from '../../styleSheet/MainStyle';
import InputWithTitle from '../../components/InputWithTitle';
import Colors from '../../constants/Colors';
import UnderlineView from '../../components/underlineView';
const AddAddressScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView>
        <View style={MainStyle.screen}>
          <UnderlineView />
          <View
            style={[
              MainStyle.mainBody,
              {marginLeft: 10, marginTop: -10, marginRight: 10},
            ]}>
            <View>
              <KeyboardAvoidingView enabled>
                <InputWithTitle
                  title="City"
                  capitalize="none"
                  keyboardType="default"
                  returnKeyType="next"
                  secureText="false"
                />

                <InputWithTitle
                  title="Zone"
                  capitalize="none"
                  keyboardType="default"
                  returnKeyType="next"
                  secureText="false"
                />

                <InputWithTitle
                  title="Street"
                  capitalize="none"
                  keyboardType="default"
                  returnKeyType="next"
                  secureText="false"
                />

                <View style={MainStyle.ChooseType}>
                  <View style={[MainStyle.sectionThree, {marginRight: 30}]}>
                    <Image
                      source={require('../../images/icon_home.png')}
                      style={{width: 29, height: 28, margin: 10}}
                    />
                    <Text
                      style={[
                        MainStyle.centerTextStyle,
                        {color: Colors.primaryColor},
                      ]}>
                      Home
                    </Text>
                  </View>
                  <View style={[MainStyle.sectionThree, {marginRight: 30}]}>
                    <Image
                      source={require('../../images/icon-office.png')}
                      style={{width: 33, height: 27, margin: 10}}
                    />
                    <Text style={MainStyle.centerTextStyle}>Office</Text>
                  </View>
                  <View style={MainStyle.sectionThree}>
                    <Image
                      source={require('../../images/icon-other.png')}
                      style={{width: 29, height: 29, margin: 10}}
                    />
                    <Text style={MainStyle.centerTextStyle}>Other</Text>
                  </View>
                </View>
                <UnderlineView />
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    style={{
                      width: 21,
                      height: 21,
                      marginRight: 15,
                      resizeMode: 'contain',
                    }}
                    source={require('../../images/RadioUnSel.png')}
                  />
                  <Text style={MainStyle.centerTextStyle}>
                    Primary address?
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
        <MyButton
          title="Add Address"
          onSelect={() => {
            props.navigation.navigate('AddAddress');
          }}
        />
      </View>
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

export default AddAddressScreen;
AddAddressScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Address Detail </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};
