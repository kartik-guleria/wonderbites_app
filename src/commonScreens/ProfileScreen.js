import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {PROFILECATEGORIES} from '../data/dummy-data';
import MainStyle from '../styleSheet/MainStyle';
import UnderlineView from '../components/underlineView';

const ProfileScreen = props => {
  const getFooter = () => {
    return (
      <View style={{marginLeft: 20}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
          <Text style={styles.buttonFeedAndRate}>Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RateUs')}>
          <Text style={[styles.buttonFeedAndRate, {marginTop: 26}]}>
            Rate Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.logoutButton}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getHeader = () => {
    return (
      <View>
        <View style={styles.profileDetailView}>
          <Image
            style={styles.profileImage}
            source={require('../images/profile.png')}
          />
          <View style={{marginLeft: 24}}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@gmail.com</Text>
          </View>
        </View>
        <View style={{marginLeft: 16, marginRight: 16, marginBottom: 20}}>
          <UnderlineView />
        </View>
      </View>
    );
  };

  const renderGridItem = itemData => {
    return (
      <View style={{marginLeft: 17, marginRight: 17}}>
        <TouchableOpacity
          style={{marginBottom: 40}}
          onPress={() => props.navigation.navigate(itemData.item.nextScreen)}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.flatlistIcons} source={itemData.item.image} />
            <View style={styles.optionsView}>
              <Text
                style={{
                  color: '#2B2C2D',
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Gotham',
                }}>
                {itemData.item.options}
              </Text>
              <Image
                style={styles.arrowImage}
                source={require('../images/arrowRed.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <SafeAreaView style={{backgroundColor: '#ffffff', marginBottom: 100}}>
        <UnderlineView />

        <FlatList
          style={{marginTop: 10}}
          keyExtractor={(item, index) => item.id}
          data={PROFILECATEGORIES}
          renderItem={renderGridItem}
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
          numColumns={1}
        />
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
ProfileScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Profile</Text>,
  headerBackImage: (
    <Image
      source={require('../images/back.png')}
      style={MainStyle.navBackButton}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  arrowImage: {
    width: 5.5,
    height: 11,
    marginTop: 4,
  },
  optionsView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 19,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  profileDetailView: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 70,
    width: 70,
  },
  name: {
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '700',
  },
  email: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: '400',
    color: '#2B2C2D',
    fontFamily: 'gotham',
  },
  line: {
    marginTop: 23,
    marginLeft: 16,
    marginRight: 16,
    height: 1,
    backgroundColor: '#2B2C2D',
  },

  buttonFeedAndRate: {
    color: '#2B2C2D',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Gotham',
  },
  logoutButton: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    fontFamily: 'gotham',
    color: '#E1251B',
  },
  flatlistIcons: {
    height: 29,
    width: 29,
  },
});
