import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import MainStyles from '../../styleSheet/MainStyle';
import MyGrayButton from '../../components/MyGrayButton';
import MyButton from '../../components/MyButton';
import UnderlineView from '../../components/underlineView';

const AboutUsScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <ScrollView>
        <View style={{margin: 20, marginTop: 0}}>
          <Text style={[MainStyles.headerTitle, {fontSize: 16}]}>
            Send us your feedback
          </Text>

          <Text
            style={[
              MainStyles.descText,
              {
                marginTop: 20,
                marginBottom: 0,
                marginLeft: 35,
                marginRight: 35,
                fontSize: 13,
                textAlign: 'left',
              },
            ]}>
            Do you have any suggestion or found out a bug? Let us know in the
            field below
          </Text>
          <UnderlineView />
          <Text style={[MainStyles.headerTitle, {fontSize: 16}]}>
            How was your experience?
          </Text>

          {/* <View style={MainStyles.ChooseType}> */}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/best.png')}
              style={[
                styles.image,
                {
                  marginRight: 20,
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 0,
                },
              ]}
            />

            <Image
              source={require('../../images/good.png')}
              style={styles.image}
            />

            <Image
              source={require('../../images/bad.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              shadowColor: 'black',
              shadowOpacity: 0.15,
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 2,
              elevation: 2,
            }}>
            <TextInput
              style={[
                styles.input,
                {
                  shadowColor: 'black',
                  shadowOpacity: 0.15,
                  shadowOffset: {width: 0, height: 0},
                  shadowRadius: 12,
                  elevation: 2,
                },
              ]}
              placeholder="Enter your feedback here..."
              placeholderTextColor="#2B2C2D"
              //   value={this.state.value}
              //   onChangeText={text => this.setState({value: text})}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          marginBottom: 30,
        }}>
        <View style={{marginLeft: 10, marginRight: 10}}>
          <MyButton
            title="Submit"
            onSelect={() => {
              props.navigation.navigate('OrderComplete');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AboutUsScreen;
AboutUsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Feedback </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    margin: 15,
  },
  input: {
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 12,
    color: '#2B2C2D',
    padding: 10,
    paddingTop: 35,
    marginLeft: -5,
    marginRight: -5,
    height: 300,
  },
});
