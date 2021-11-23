import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import Colors from '../constants/Colors';

const images = [
  require('../images/noodle.png'),
  require('../images/noodle.png'),
  require('../images/noodle.png'),
  require('../images/noodle.png'),
];

const ProductGridTile = props => {
  return (
    <View style={styles.productItem}>
      <View style={{backgroundColor: '#F2F3F0', borderRadius: 12}}>
        <View style={styles.productRow}>
          <ImageSlider images={images}>
            {/* <ImageBackground source={{uri: props.image}} style={styles.bgImge}> */}

            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageSlider>
          {/* </ImageBackground> */}
        </View>
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
          <View style={{...styles.productRow, ...styles.productDescription}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.rateText}>{props.rating}</Text>

              <Image
                style={{height: 10, width: 10}}
                source={require('../images/star.png')}
              />
            </View>
            <View style={styles.circleView}>
              <Image
                style={{height: 16, width: 18}}
                source={require('../images/heart.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTitle}>Thai Noodles</Text>
            <Text style={[styles.textTitle, {color: Colors.primaryColor}]}>
              500ALL
            </Text>
          </View>
          <Text style={styles.descText}>
            Noodles with lime in a plate. The ingridients of this plate are :
            noodles, lime. ....
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textTitle, {fontWeight: '500'}]}>
              Most Sold of this week
            </Text>
            <TouchableOpacity style={styles.buttonStyleRed}>
              <View>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Gotham',
                    fontWeight: '500',
                    fontSize: 12,
                  }}>
                  ADD
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderColor: Colors.primaryColor,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 0},
  },
  buttonStyleRed: {
    backgroundColor: Colors.primaryColor,
    height: 30,
    alignItems: 'center',
    width: 75,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 8,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    // marginBottom: 10,
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Gotham',
  },
  textTitle: {
    fontWeight: '700',
    color: '#2B2C2D',
    fontFamily: 'Gotham',
    fontSize: 18,
    alignSelf: 'flex-start',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  descText: {
    color: '#2B2C2D',
    marginLeft: 10,
    marginRight: 6,
    fontSize: 13,
    fontFamily: 'Gotham',
  },
  rateText: {
    color: '#2B2C2D',
    fontSize: 18,
    fontFamily: 'Gotham',
    fontWeight: '500',
  },

  circleView: {
    height: 30,
    width: 30,
    backgroundColor: '#FFFFFF',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    marginBottom: 4,
  },
  productRow: {
    flexDirection: 'row',
    borderRadius: 12,
    // height: 350,
  },

  productDescription: {
    // paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -40,
  },
  bgImge: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default ProductGridTile;
