import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
import WaterMarkView from '../components/WaterMarkView';
// import {Icon} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    detailDesc: 'Open your phone settings',
    title: 'App Permissions',
  },
  {
    id: '2',
    detailDesc: 'Change your email or delete your account',
    title: 'Account Settings',
  },
  {
    id: '3',
    detailDesc: 'Edit your payment details',
    title: 'Payment Details',
  },
  {
    id: '4',
    detailDesc: 'English',
    title: 'Language',
  },
  {
    id: '5',
    detailDesc: 'v1.0',
    title: 'App Version',
  },
];

const Item = ({title, detailDesc}) => (
  <View>
    <View style={{marginLeft: 25, marginRight: 25}}>
      <Text
        style={[
          MainStyle.descText,
          {textAlign: 'left', fontWeight: '500', marginTop: 5, marginBottom: 5},
        ]}>
        {title}
      </Text>
    </View>
    <View
      style={{marginLeft: 25, marginRight: 25, marginTop: 6, marginBottom: 3}}>
      <Text
        style={[MainStyle.descTextLight, {textAlign: 'left', fontSize: 14}]}>
        {detailDesc}
      </Text>
    </View>
    <UnderlineView />
  </View>
);

const SettingsScreen = props => {
  const renderItem = ({item}) => (
    <Item title={item.title} detailDesc={item.detailDesc} />
  );

  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View
        style={[
          MainStyle.MainContainerLight,
          {marginBottom: 100, marginTop: -10, paddingTop: 10},
        ]}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator="false"
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <WaterMarkView />
    </View>
  );
};

export default SettingsScreen;
SettingsScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Settings </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
