import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Linking,
} from 'react-native';
import MainStyle from '../src/styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';
// import {Icon} from 'react-native-elements';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    icon_image: require('../src/images/Phone.png'),
    title: 'Call us',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    icon_image: require('../src/images/Terms.png'),
    title: 'Terms',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    icon_image: require('../src/images/Privacy.png'),
    title: 'Privacy policy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    icon_image: require('../src/images/currency.png'),
    title: 'Content policy',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    icon_image: require('../src/images/Lang.png'),
    title: 'English',
  },
];

const Header = props => {
  return <View></View>;
};
const getFooter = () => {
  return (
    <View>
      <Text style={[MainStyle.descText, {textAlign: 'left', marginTop: 30}]}>
        Follow us
      </Text>
      <View
        style={[
          MainStyle.ChooseType,
          {justifyContent: 'flex-start', marginLeft: -8},
        ]}>
        <View style={{height: 70}}>
          <Image
            source={require('../src/images/facebook.png')}
            style={MainStyle.FollowBox}
          />
        </View>
        <View>
          <Image
            source={require('../src/images/Insta.png')}
            style={MainStyle.FollowBox}
          />
        </View>
        <View>
          <Image
            source={require('../src/images/tiktok.png')}
            style={MainStyle.FollowBox}
          />
        </View>
        <View>
          <Image
            source={require('../src/images/youtube.png')}
            style={MainStyle.FollowBox}
          />
        </View>
      </View>
      <UnderlineView />
    </View>
  );
};

const SideMenuScreen = props => {
  const Item = ({title, icon_image}) => (
    <TouchableOpacity
      style={[MainStyle.descText, {textAlign: 'left'}]}
      // onPress={() => {
      //   console.log('Hi from React Native');
      //   Linking.openURL('tel:999990000');
      // }}>
      onPress={() => props.navigation.navigate('OpenLocSetting')}>
      <View style={MainStyle.row}>
        <Image
          source={icon_image}
          style={{
            width: 10,
            height: 15,
            margin: 5,
            marginRight: 10,
            resizeMode: 'contain',
            backgroundColor: '#DDDDDD',
          }}
        />

        <Text style={[MainStyle.descText, {textAlign: 'left'}]}>
          {title} 122
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={MainStyle.mainBody}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[
          MainStyle.MainContainerLight,
          {marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 160},
        ]}>
        <View>
          <Text style={[MainStyle.headingDesc, {textAlign: 'left'}]}>
            Sign in
          </Text>
          <Text style={[MainStyle.headingDesc, {textAlign: 'left'}]}>
            to wonderbites
          </Text>
          <TouchableOpacity
            style={[MainStyle.buttonStyle, {width: 140, marginBottom: 5}]}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('SignJoin')}>
            <Text style={MainStyle.buttonTextStyle}>Sign in or join</Text>
          </TouchableOpacity>
        </View>
        <UnderlineView />
        <FlatList
          style={{marginTop: -16}}
          data={DATA}
          showsVerticalScrollIndicator="false"
          // renderItem={renderItem}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[MainStyle.descText, {textAlign: 'left'}]}
              onPress={() => {
                console.log('Hi from React Native');
                Linking.openURL('tel:999990000');
              }}>
              <View style={MainStyle.row}>
                <Image
                  source={item.icon_image}
                  style={{
                    width: 20,
                    height: 20,
                    margin: 5,
                    marginRight: 10,
                    resizeMode: 'contain',
                  }}
                />

                <Text style={[MainStyle.descText, {textAlign: 'left'}]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={Header}
          ListFooterComponent={getFooter}
        />
      </View>
    </View>
  );
};

export default SideMenuScreen;
SideMenuScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}> </Text>,
  headerBackImage: (
    <Image
      source={require('../src/images/cross-black.png')}
      style={{width: 20, height: 20, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
