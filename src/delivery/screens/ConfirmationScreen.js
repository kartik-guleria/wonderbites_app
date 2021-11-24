import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  EventSubscriptionVendor,
  Switch,
} from 'react-native';
import MySwitch from '../../components/MySwitch';
import MyCustomSwitch from '../../components/MyCustomSwitch';
import MainStyle from '../../styleSheet/MainStyle';
import ImageSlider from '../../components/ImageSlider';
import Colors from '../../constants/Colors';
import UnderlineView from '../../components/underlineView';

const onSelectSwitch = index => {
  //alert('Selected index: ' + index);
};
const images = [
  require('../../images/noodle.png'),
  require('../../images/noodle.png'),
  require('../../images/noodle.png'),
  require('../../images/noodle.png'),
];
const ConfirmationScreen = props => {
  state = {
    value: 1,
  };

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <View style={{height: '100%', backgroundColor: '#ffffff'}}>
        <ScrollView>
          <View style={styles.bottomContainer}>
            <View style={{height: 300}}>
              <ImageSlider images={images} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[MainStyle.textTitle, {marginLeft: 0}]}>
                Thai Noodles
              </Text>
              <Text style={[MainStyle.textTitle, {color: Colors.primaryColor}]}>
                800ALL
              </Text>
            </View>
            <Text
              style={[
                MainStyle.descText,
                {color: '#C4C4C4', fontWeight: '500', textAlign: 'left'},
              ]}>
              375 Kcal
            </Text>
            <Text
              style={[
                MainStyle.descText,
                {
                  borderBottomhei: 2,
                  borderColor: '#EFEFEF',
                  marginTop: 15,
                  textAlign: 'left',
                },
              ]}>
              Chicken, pork, shrimps, honey, soy souce toasted sesame oil,
              chilli, ramen, brown
            </Text>
            <Text
              style={[
                MainStyle.descText,
                {fontWeight: '500', marginTop: 2, textAlign: 'left'},
              ]}>
              Added: Chicken, Limes
            </Text>
            <UnderlineView />
            <View style={styles.textView}>
              <Text style={styles.text}>Quantity</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.decrementValue}>
                  <Image
                    style={styles.iconBox}
                    source={require('../../images/minus.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 19,
                    marginRight: 19,
                    fontSize: 18,
                    fontWeight: '600',
                    alignSelf: 'center',
                  }}>
                  {this.state.value}
                </Text>
                <TouchableOpacity onPress={this.incrementValue}>
                  <Image
                    style={styles.iconBox}
                    source={require('../../images/plus.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <UnderlineView />

            <View style={styles.textView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Dressing (1/3)</Text>
              </View>
              <View>
                <MyCustomSwitch
                  selectionMode={1}
                  roundCorner={true}
                  option1={'On the side'}
                  option2={'Mixed'}
                  onSelectSwitch={onSelectSwitch}
                  selectionColor={'#E91E05'}
                />
              </View>
            </View>

            <UnderlineView />

            <View style={styles.textView}>
              <Text style={styles.text}>Add bread</Text>

              <View style={styles.breadSwitch}>
                <MySwitch />
              </View>
            </View>

            <UnderlineView />
          </View>
          <View
            style={{
              flexDirection: 'row',
              // marginBottom: 100,
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={[styles.buttonStyleGray, {width: '44%'}]}
              onPress={() => {
                props.navigation.navigate('AddIngrieidients', {
                  productId: selectedProduct.id,
                });
              }}>
              <View>
                <Text style={[styles.text_color, {color: '#DDDDDD'}]}>
                  Modify
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyleRed, {width: '44%'}]}
              onPress={() => {
                props.navigation.navigate('ChooseOption');
              }}>
              <View>
                <Text style={styles.text_color}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    // marginTop: 19,
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 45,
    alignItems: 'center',
    borderRadius: 12,
    // marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Gotham',
  },
  text_color: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Gotham',
  },
  buttonStyleGray: {
    backgroundColor: '#FFFFFF',
    height: 45,
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginLeft: 15,
    // marginRight: 15,
    marginBottom: -25,
    justifyContent: 'center',
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Gotham-Bold',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    height: 32,
    width: 32,
  },

  bottomContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
  },

  breadSwitch: {
    marginRight: 5,
  },
  viewContainer: {
    marginLeft: 16,
    marginRight: 13,
  },
});
export default ConfirmationScreen;
ConfirmationScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/cross-black.png')}
      style={{width: 30, height: 30, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
