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
  <View style={MainStyle.row}>
    <Text style={[MainStyle.descText, {textAlign: 'left'}]}>{title}</Text>
    <Text style={[MainStyle.descText, {textAlign: 'left'}]}>{detailDesc}</Text>
    <UnderlineView />
  </View>
);

const NotificationListScreen = props => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={MainStyle.mainBody}>
      <View
        style={[
          MainStyle.MainContainerLight,
          {marginLeft: 20, marginRight: 20, marginBottom: 100},
        ]}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator="false"
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default NotificationListScreen;
NotificationListScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Notifications </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
