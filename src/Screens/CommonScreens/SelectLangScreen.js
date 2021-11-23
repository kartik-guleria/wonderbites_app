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
import MainStyle from '../../styleSheet/MainStyle';
import UnderlineView from '../../components/underlineView';
import WaterMarkView from '../../components/WaterMarkView';
// import {Icon} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'English',
  },
  {
    id: '2',
    title: 'Albanian',
  },
  {
    id: '3',
    title: 'French',
  },
  {
    id: '4',
    title: 'Italian',
  },
  {
    id: '5',
    title: 'Greek',
  },
  {
    id: '6',
    title: 'Macedonian',
  },
];

const Item = ({title}) => (
  <View>
    <Text
      style={[
        MainStyle.descText,
        {
          textAlign: 'left',
          fontWeight: '500',
          // marginBottom: 8,
          marginLeft: 20,
        },
      ]}>
      {title}
    </Text>
    <UnderlineView />
  </View>
);

const SelectLangScreen = props => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View
        style={[
          MainStyle.MainContainerLight,
          {marginBottom: 100, marginLeft: 15, marginRight: 15, marginTop: -12},
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

export default SelectLangScreen;
SelectLangScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> Language </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 30, height: 20, marginLeft: 17, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
