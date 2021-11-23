import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import MainStyles from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
import WaterMarkView from '../components/WaterMarkView';

const AboutUsScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View style={{margin: 20, marginTop: 0}}>
        <Text style={MainStyles.aboutPageTitle}>Customer</Text>
        <Text style={MainStyles.aboutPageDesc}>
          "Customer" or "You" or "Your" refers to you, as a customer of the
          Services. A customer is someone who accesses or uses the Services for
          the purpose of sharing, displaying, hosting, publishing, transacting,
          or uploading information or views or pictures and includes other
          persons jointly participating in using the Services including without
          limitation a user having access to 'restaurant business page' to
          manage claimed business listings or otherwise.
        </Text>
        <Text style={MainStyles.aboutPageTitle}>Content</Text>
        <Text style={MainStyles.aboutPageDesc}>
          "Content" will include (but is not limited to) reviews, images,
          photos, audio, video, location data, nearby places, and all other
          forms of information or data. "Your content" or "Customer Content"
          means content that you upload, share or transmit to, through or in
          connection with the Services, such as likes, ratings, reviews, images,
          photos, messages, profile information, and any other materials that
          you publicly display or displayed in your account profile.
        </Text>
        <Text style={MainStyles.aboutPageTitle}>
          Eligibility to use the services
        </Text>
        <Text style={MainStyles.aboutPageDesc}>
          You hereby represent and warrant that you are at least eighteen (18)
          years of age or above and are fully able and competent to understand
          and agree the terms, conditions, obligations, affirmations,
          representations, and warranties set forth in these Terms. Compliance
          with Laws. You are in compliance with all laws and regulations in the
          country in which you live when you access and use the Services. You
          agree to use the Services only in compliance with these Terms and
          applicable law, and in a manner that does not violate our legal rights
          or those of any third parties.
        </Text>
      </View>
      <WaterMarkView />
    </View>
  );
};

export default AboutUsScreen;
AboutUsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> About </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={MainStyles.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};
