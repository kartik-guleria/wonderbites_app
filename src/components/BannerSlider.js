import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
const {width} = Dimensions.get('window');
const height = (width * 38) / 60;

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
        {/* <View style={style.pagination}>
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
        </View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height,
    alignSelf: 'center',
  },
  scroll: {
    width,
    height,
  },
  image: {
    width,
    height,
    // marginLeft: 50,
    marginRight: 20,
    resizeMode: 'cover',
    borderRadius: 12,
    height: 230,
    width: 289,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    color: '#888',
    fontSize: width / 50,
    margin: 2,
  },
  pagingActiveText: {
    color: '#000',
    fontSize: width / 50,
    margin: 2,
  },
});

// // the below code in App.js file
// //
// //
// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import SliderCopy from './components/slider';

// const images = [
//   'https://images.pexels.com/photos/5591738/pexels-photo-5591738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/2316543/pexels-photo-2316543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/9050512/pexels-photo-9050512.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/5168495/pexels-photo-5168495.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/7125662/pexels-photo-7125662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// ]
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={style.container}>
//         <Slider images ={images}/>
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//   container: {
//     marginTop: 150,
//     },
// })
// //
// //
// //the above code in App.js file
