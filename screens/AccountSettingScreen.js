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
    title: 'Change Email',
  },
  {
    id: '2',
    title: 'Delete Account',
  },
];

const AccountSettingScreen = props => {
  const Item = ({title}) => (
    <View>
      <View>
        <TouchableOpacity
          // style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('ChangeEmail', {
              categoryId: title,
            })
          }>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[
                MainStyle.descText,
                {
                  textAlign: 'left',
                  fontWeight: '500',
                  marginBottom: 5,
                  marginLeft: 20,
                  width: '90%',
                },
              ]}>
              {title}
            </Text>
            <Image
              source={require('../src/images/arrow2.png')}
              style={{
                width: 8,
                height: 14,
                marginRight: 16,
                resizeMode: 'contain',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <UnderlineView />
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View
        style={[
          MainStyle.MainContainerLight,
          {marginBottom: 100, marginLeft: 15, marginRight: 15, marginTop: -10},
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

export default AccountSettingScreen;
AccountSettingScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Settings </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
