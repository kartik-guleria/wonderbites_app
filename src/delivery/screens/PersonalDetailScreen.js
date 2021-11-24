import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
// Install this dependency "npm install react-native-datepicker --save"
import DatePicker from 'react-native-datepicker';
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
const PersonalDetailsScreen = () => {
  const [date, setDate] = useState('');
  return (
    <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <UnderlineView />
      <ScrollView>
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={styles.imageButton}>
            <Image
              style={styles.profileImage}
              source={require('../../images/profile.png')}
            />
            <Image
              style={styles.imageIcon}
              source={require('../../images/camera.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.title}>Full Name</Text>
          <View style={styles.border}>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor="#2B2C2D"></TextInput>
          </View>
        </View>
        {/* <View
              style={[styles.middleContainer, {marginLeft: 0, marginRight: 0}]}>
              <Text style={[styles.title, {marginTop: 17}]}>Date of Birth</Text>
              <View>
                <DatePicker
                  style={{
                    fontFamily: 'Gotham',
                    alignSelf: 'flex-start',
                    color: '#2B2C2D',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    // width: '100%',
                  }}
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="23-02-1993"
                  format="DD-MM-YYYY"
                  minDate="01-01-1950"
                  maxDate="01-01-2022"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={date => {
                    setDate(date);
                  }}
                />
              </View>
            </View> */}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>Date of Birth</Text>
          <View
            style={[
              styles.border,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="23-02-1993"
              placeholderTextColor="#2B2C2D"></TextInput>
            <Image
              style={{
                width: 14,
                height: 8,
                resizeMode: 'contain',
                marginRight: 16,
              }}
              source={require('../../images/redDownArrow.png')}
            />
          </View>
          <Text style={[styles.title, {marginTop: 17}]}>Email Address</Text>
          <View style={styles.border}>
            <TextInput
              style={styles.input}
              placeholder="johndoe@gmail.com"
              placeholderTextColor="#2B2C2D"></TextInput>
          </View>

          <Text style={[styles.title, {marginTop: 17}]}>Phone Number</Text>
          <View style={styles.border}>
            <TextInput
              style={styles.input}
              placeholder="+355 69 00 00 000"
              placeholderTextColor="#2B2C2D"></TextInput>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalDetailsScreen;
PersonalDetailsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Personal Details</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  imageButton: {
    borderRadius: 35,
    alignSelf: 'center',
    height: 70,
  },
  profileImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  imageIcon: {
    height: 18,
    width: 20,
    alignSelf: 'center',
    marginTop: 70,
    position: 'relative',
    marginTop: -25,
    marginLeft: 46,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#2B2C2D',
  },
  input: {
    marginLeft: 22,
    fontWeight: '300',
    fontSize: 16,
    fontFamily: 'Gotham-Light',
    color: '#2B2C2D',
  },
  button: {
    borderRadius: 12,
    backgroundColor: '#E1251B',
    height: 49,
    marginLeft: 16,
    marginRight: 16,
    bottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 14,
    alignSelf: 'center',
  },
  border: {
    marginTop: 15,
    borderColor: '#dddddd',
    height: 45,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  middleContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 22,
  },
});
