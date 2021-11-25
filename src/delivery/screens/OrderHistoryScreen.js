//order History past screen
import React, {Component} from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {sectionListData} from '../../data/sectionListData';
//make a tab component and import from it.
import OrderHistoryTab from '../../components/orderHistoryTab';
import MainStyle from '../../styleSheet/MainStyle';
import Stars from 'react-native-stars';
import UnderlineView from '../../components/underlineView';
class SectionListItem extends Component {
  render() {
    return (
      <View style={styles.sectionBox}>
        <View style={styles.sectionBoxView}>
          <View style={styles.titleNbuttonView}>
            <Text style={styles.titleText}>{this.props.item.name}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PastOrderDetail')}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.arrowimage}
                  source={require('../../images/arrow.png')}
                />
                <Image
                  style={styles.arrowimage}
                  source={require('../../images/arrow.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.date}>{this.props.item.date}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.orderImages} source={this.props.item.images} />
            <Image style={styles.orderImages} source={this.props.item.images} />
          </View>
          <View style={styles.detailsHeadingView}>
            <Text style={styles.detailsHeading}>Order Rate</Text>
            <Text style={styles.detailsHeading}>Products</Text>
            <Text style={[styles.detailsHeading, {marginRight: 3}]}>
              Order Price
            </Text>
          </View>

          <View style={styles.orderDetailsView}>
            <View style={{}}>
              <Stars
                count={5}
                starSize={20}
                spacing={2}
                fullStar={
                  <Image
                    style={styles.myStarStyle}
                    source={require('../../images/starFill.png')}
                  />
                }
                emptyStar={
                  <Image
                    style={styles.myStarStyle}
                    source={require('../../images/starEmpty.png')}
                  />
                }
              />
            </View>

            <Text style={[styles.orderDetails, {marginLeft: -4}]}>
              {this.props.item.products} Products
            </Text>

            <Text
              style={[styles.orderDetails, {color: '#E1251B', marginRight: 4}]}>
              {this.props.item.price} LEK
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.monthView}>
        <Text style={styles.monthText}>{this.props.section.month}</Text>
        <Text style={styles.monthOrders}>
          {this.props.section.orders} Orders
        </Text>
      </View>
    );
  }
}
const onSelectSwitch = index => {
  //alert('Selected index: ' + index);
};
const OrderHistoryScreen = props => {
  state = {
    value: 0,
  };
  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  decrementValue = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };
  // render() {
  return (
    <View
      style={[
        MainStyle.screen,
        {height: '100%', justifyContent: 'flex-start'},
      ]}>
      <UnderlineView />
      <View style={styles.container}>
        <OrderHistoryTab
          selectionMode={1}
          option1={'Past Orders'}
          option2={'Upcoming Orders'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#E91E05'}
        />
        {/* <View style={[styles.screen, {marginTop: 100}]}>
            <Image
              source={require('../../images/orderEmpty.gif')}
              style={styles.image}
            />

            <Text style={styles.sectionDescription}>Nothing in here !!!</Text>
          </View> */}

        <SectionList
          renderItem={({item, index}) => {
            return <SectionListItem item={item} index={index} />;
          }}
          renderSectionHeader={({section}) => {
            return <SectionHeader section={section} />;
          }}
          sections={sectionListData}
          keyExtractor={(item, index) => item.id}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </View>
  );
  // }
};
export default OrderHistoryScreen;

OrderHistoryScreen.navigationOptions = {
  headerTitle: <Text style={MainStyle.headerTitle}>Order History</Text>,
  headerBackImage: (
    <Image
      source={require('../../images/back.png')}
      style={[MainStyle.navBackButton, {marginBottom: 10}]}
    />
  ),
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  arrowimage: {
    width: 5,
    height: 10,
    marginTop: 3.5,
  },
  orderTitle: {
    fontFamily: 'Gotham',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15.31,
    color: '#000000',
    fontStyle: 'normal',
  },
  date: {
    color: '#898989',
    marginTop: 9,
    fontSize: 12,
    fontFamily: 'Gotham',
    fontWeight: '500',
  },
  orderImages: {
    width: 41,
    height: 41,
    marginLeft: 2,
    marginTop: 7,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: '#F2F3F0',
  },
  image: {
    height: 145,
    width: 143,
    marginLeft: -20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  detailsHeading: {
    fontSize: 12,
    fontFamily: 'Gotham',
    fontWeight: '500',
    color: '#898989',
    lineHeight: 11.48,
  },
  detailsHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  orderDetailsView: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  orderDetails: {
    fontWeight: '700',
    fontFamily: 'Gotham',
    fontSize: 12,
    lineHeight: 13.26,
  },

  myStarStyle: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
  },

  monthView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21,
  },
  monthText: {
    fontSize: 20,
    color: '#E1251B',
    fontFamily: 'Gotham',
    fontWeight: '500',
    lineHeight: 19.14,
  },
  monthOrders: {
    fontSize: 16,
    color: '#626262',
    fontFamily: 'Gotham',
    fontWeight: '500',
    lineHeight: 15.31,
  },
  sectionBox: {
    marginTop: 17,
    borderColor: '#dddddd',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    // elevation: 1,
    borderWidth: 1,
  },
  sectionBoxView: {
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },
  titleNbuttonView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Gotham',
    fontWeight: '500',
    lineHeight: 15.31,
  },
  sectionDescription: {
    fontSize: 18,
    color: '#2B2C2D',
    height: 200,
    fontWeight: '500',
    marginTop: 25,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'Gotham',
    alignSelf: 'center',
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
});
