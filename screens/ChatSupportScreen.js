// chat support screen
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
const ChatSupportScreen = props => {
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <UnderlineView />
      <ScrollView>
        {/* <Text style={styles.date}>Today at 11:35 AM</Text>
        <View style={{marginTop: 23}}>
          <View style={[styles.leftView, {height: 58}]}>
            <Text style={styles.leftText}>
              Hello John, How can we help you.
            </Text>
          </View>
          <Text style={styles.leftTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Hello, I need to cancel my recent order.I made it by mistake.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={styles.leftView}>
            <Text style={styles.leftText}>
              Sure! Is it the order with 2 Burritos, that you made 5 mins ago?
            </Text>
          </View>
          <Text style={styles.leftTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Yes!That’s the one. I would like to cancel it please.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Can you cancel it? I dont want to receive it.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={[styles.leftView, {marginRight: 264}]}>
            <Text style={styles.typing}>...</Text>
          </View>
        </View> */}
        <View style={styles.box}>
          <Text style={styles.text1}>
            Sorry!{'\n'}
            We are currently{'\n'}
            unavailable to chat.{'\n'}
          </Text>
          <Text style={styles.text2}>
            Continue to write us a message, but we{'\n'}
            may not get back to you until we are open.{'\n'}
            If you need immediate assistance give us a{'\n'}
            call at:
            <Text style={{color: '#007AFF'}}> +355 69 601 1010</Text>
          </Text>
          <Text style={styles.text3}>Mon - Sat</Text>
          <Text style={styles.text4}>09:00 - 21:00</Text>
        </View>
      </ScrollView>
      <View style={styles.messageBox}>
        <TextInput
          style={styles.messageText}
          placeholder="Write a message"
          multiline={true}
        />
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatSupportScreen;
ChatSupportScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Chat Support</Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  box: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,
    height: 134,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 2,
    // overflow: 'hidden',
    borderColor: '#dddddd',
    borderRadius: 12,
    borderWidth: 1,
  },
  text1: {
    marginTop: 28,
    fontSize: 18,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#2B2C2D',
    lineHeight: 20.23,
    letterSpacing: 0.03,
    textAlign: 'center',
  },
  text2: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#2B2C2D',
    alignSelf: 'center',
    lineHeight: 19.28,
    textAlign: 'center',
  },
  text3: {
    marginTop: 43,
    fontSize: 18,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#2B2C2D',
    lineHeight: 17.23,
    letterSpacing: 0.03,
    textAlign: 'center',
  },
  text4: {
    marginTop: 10,
    marginBottom: 26,
    fontSize: 14,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#2B2C2D',
    lineHeight: 13.4,
    letterSpacing: 0.03,
    textAlign: 'center',
  },

  date: {
    fontFamily: 'Gotham',
    fontWeight: '400',
    fontSize: 12,
    color: '#4A4A4A',
    marginTop: 16,
    alignSelf: 'center',
    lineHeight: 14.06,
    letterSpacing: 0.03,
  },
  leftView: {
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#E1251B',
    flexDirection: 'row',
    marginRight: 114,
    marginLeft: 16,
  },
  leftText: {
    marginTop: 14,
    marginBottom: 14,
    fontFamily: 'Gotham',
    fontWeight: '400',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 12,
    marginRight: 12,
    alignSelf: 'center',
    lineHeight: 16.71,
  },
  leftTime: {
    fontFamily: 'Gotham',
    fontWeight: '400',
    fontSize: 12,
    color: '#626262',
    lineHeight: 14.06,
    letterSpacing: 0.03,
    marginLeft: 28,
    marginTop: 3,
  },
  rightView: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 117,
  },
  rightText: {
    marginTop: 14,
    marginBottom: 14,
    fontFamily: 'Gotham',
    fontWeight: '400',
    fontSize: 14,
    color: '#2B2C2D',
    marginLeft: 12,
    marginRight: 10,
    alignSelf: 'center',
    lineHeight: 16.71,
  },
  rightTime: {
    alignSelf: 'flex-end',
    fontFamily: 'Gotham',
    fontWeight: '400',
    fontSize: 12,
    color: '#626262',
    lineHeight: 14.06,
    letterSpacing: 0.03,
    marginRight: 35,
    marginTop: 3,
  },
  typing: {
    marginTop: 14,
    color: '#FFFFFF',
    marginLeft: 14,
    fontSize: 80,
    marginTop: -50,
  },
  messageBox: {
    flexDirection: 'row',
    borderWidth: 1,
    bottom: 30,
    height: 80,
    borderTopColor: '#DDDDDD',
    borderColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
    fontFamily: 'Gotham',
    fontWeight: '400',
    color: '#898989',
    marginLeft: 16,
    marginRight: 16,
    alignSelf: 'center',
  },
  buttonView: {
    marginRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gotham',
    fontWeight: '700',
    color: '#898989',
    alignSelf: 'center',
    lineHeight: 21.48,
  },
});
