import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
const {width} = Dimensions.get('window');
const height = (width * 32) / 60;

export default class BannerSlider extends React.Component {
  state = {
    active: 0,
  };
  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.container}>
          {this.props.images.map((image, index) => (
            <View>
              <Image key={index} source={image} style={style.image} />
            </View>
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? style.pagingActiveText
                  : style.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 300,
    width: width - 32,
  },
  scroll: {
    width: width - 32,
    height: 300,
  },
  image: {
    height,
    resizeMode: 'contain',
    borderRadius: 12,
    height: 300,
    // margin: 30,
    width: width - 32,
    alignSelf: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
  },
  pagingText: {
    color: '#DDDDDD',
    fontSize: width / 65,
    margin: 1,
  },
  pagingActiveText: {
    color: Colors.primaryColor,
    fontSize: width / 55,
    margin: 0,
    marginRight: 1,
  },
});
