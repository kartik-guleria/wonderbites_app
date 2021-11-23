import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import MainStyles from '../../styleSheet/MainStyle';
import Colors from '../../constants/Colors';
import UnderlineView from '../../components/underlineView';
import WaterMarkView from '../../components/WaterMarkView';

const TermsConditionScreen = props => {
  return (
    <View style={MainStyles.mainBody}>
      <StatusBar barStyle="dark-content" />
      <UnderlineView />
      <View style={{margin: 16, marginTop: 0}}>
        <Text
          style={[
            styles.title,
            {fontSize: 32, marginTop: 10, fontWeight: '500'},
          ]}>
          Content Policy
        </Text>
        <Text style={[styles.title, {color: '#C4C4C4', marginBottom: 8}]}>
          Update: 08/10/2021
        </Text>
        <Text style={styles.title}>Content Policy</Text>
        <Text style={styles.description}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dignissim dictum sed tellus pellentesque semper et non in. A ipsum
          varius rhoncus at eros. Id risus volutpat massa vel. Egestas nulla
          lacus tincidunt eget varius. Enim molestie amet, gravida est et. Augue
          diam purus elementum mauris, massa. Facilisis viverra et porta feugiat
          eu nisl, varius eu. Nunc, massa nunc, volutpat cursus ipsum purus
          turpis. Lobortis tempor, id amet ultricies nunc, in egestas magna dui.
          Laoreet diam sit in rhoncus turpis gravida est. Egestas nunc mollis
          habitant volutpat malesuada ac id nec suspendisse. Purus gravida
          tristique eget amet.”
        </Text>
        <Text style={styles.title}>How We Use Your Personal Information</Text>
        <Text style={styles.description}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dignissim dictum sed tellus pellentesque semper et non in. A ipsum
          varius rhoncus at eros. Id risus volutpat massa vel. Egestas nulla
          lacus tincidunt eget varius. Enim molestie amet, gravida est et. Augue
          diam purus elementum mauris, massa. Facilisis viverra et porta feugiat
          eu nisl, varius eu. Nunc, massa nunc, volutpat cursus ipsum purus
          turpis. Lobortis tempor, id amet ultricies nunc, in egestas magna dui.
          Laoreet diam sit in rhoncus turpis gravida est. Egestas nunc mollis
          habitant volutpat malesuada ac id nec suspendisse. Purus gravida
          tristique eget amet.”
        </Text>
        <Text style={styles.title}>Content Policy</Text>
        <Text style={styles.description}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dignissim dictum sed tellus pellentesque semper et non in. A ipsum
          varius rhoncus at eros. Id risus volutpat massa vel. Egestas nulla
          lacus tincidunt eget varius. Enim molestie amet, gravida est et. Augue
          diam purus elementum mauris, massa. Facilisis viverra et porta feugiat
          eu nisl, varius eu. Nunc, massa nunc, volutpat cursus ipsum purus
          turpis. Lobortis tempor, id amet ultricies nunc, in egestas magna dui.
          Laoreet diam sit in rhoncus turpis gravida est. Egestas nunc mollis
          habitant volutpat malesuada ac id nec suspendisse. Purus gravida
          tristique eget amet.”
        </Text>
      </View>
      <WaterMarkView />
    </View>
  );
};

export default TermsConditionScreen;
TermsConditionScreen.navigationOptions = {
  headerTitle: <Text style={MainStyles.headerTitle}> Content Policy </Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={{width: 12, height: 21, marginLeft: 16, resizeMode: 'contain'}}
    />
  ),
  headerBackTitleVisible: false,
};
const styles = StyleSheet.create({
  title: {
    color: Colors.textColor,
    fontFamily: 'Gotham',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 5,
  },
  description: {
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontSize: 12,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
});
