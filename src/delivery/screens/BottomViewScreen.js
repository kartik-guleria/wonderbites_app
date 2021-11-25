// import * as React from 'react';
// import {Text, View, Button} from 'react-native';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
// export default function BottomViewScreen() {
//   const renderContent = () => (
//     <View
//       style={{
//         backgroundColor: '#dddddd',
//         padding: 16,
//         height: 450,
//         borderTopColor: '#DDDDDD',
//         borderRadius: 20,
//         borderTopWidth: 2,
//       }}>
//       <Text>Swipe down to close</Text>
//     </View>
//   );

//   const sheetRef = React.useRef(null);

//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'papayawhip',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Button
//           title="Open Bottom Sheet"
//           onPress={() => sheetRef.current.snapTo(0)}
//         />
//       </View>
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Modal from "react-native-modal";
import { Searchbar } from 'react-native-paper';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
  <SafeAreaView>

    <View style={{}}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>
          Show modal
        </Text>
      </TouchableOpacity>
<SafeAreaView>
      <Modal isVisible={isModalVisible}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        backgroundColor="white"
        propagateSwipe = {true}
        style={{marginRight:0,marginLeft:0,marginTop:Platform.OS==='ios'?-10:-10}}>
        <View style={{marginLeft:16,marginRight:16,marginTop:Platform.OS==='ios'?250:0}}>
          <View>
            <Text style={[styles.title,{marginTop:Platform.OS==='ios'?-20:20}]}>
              Cuisines
            </Text>
            <Searchbar
              style={styles.searchBar}
              placeholder="Search for your cuisine"
              // onChangeText={onChangeSearch}
              //  value={searchQuery}
              fontSize={12}
              fontWeight='400'
              color='#2B2C2D'
              placeholderTextColor={'#A1A1A1'}
              iconColor='red'
            />
          </View>
          <View style={styles.line1}>
          </View>
          <View style={styles.middleSection}>

            <SectionList
              sections={[
                { title: 'Cuisines', data: ['Asian', 'European', 'American', 'Greek'] }]}
              renderSectionHeader={({ section }) => <Text style={styles.sectionHeader1}>{section.title}</Text>}
              renderItem={({ item }) => <Text style={styles.blankItems1}>
              </Text>}
              keyExtractor={(item, index) => index}
            />

            <View style={styles.section1}>
              <SectionList
                sections={[
                  { data: ['Asian', 'European', 'American', 'Greek'] }]}
                renderItem={({ item }) => <Text style={styles.cuisinesData}>{item}</Text>}
                keyExtractor={(item, index) => index}
                scrollEnabled={false} />

            </View>

            <View style={{ marginTop: -12 }}>
              <SectionList
                sections={[
                  { title: 'Everything For you', data: ['Healthy Meal', 'Family Meals', 'Workaholic Meal', 'Events Meal'] }]}

                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader2}>{section.title}</Text>}
                renderItem={({ item }) => <Text style={styles.blankItems2}>
                </Text>}
                keyExtractor={(item, index) => index}
              />
            </View>

            <View style={styles.section2}>
              <SectionList
                sections={[
                  { data: ['Healthy Meal', 'Family Meals', 'Workaholic Meal', 'Events Meal'] }]}
                renderItem={({ item }) => <Text style={styles.everythingData}>{item}</Text>}
                keyExtractor={(item, index) => index}
                scrollEnabled={false} />
            </View>
          </View>

          <View style={styles.line2}>
          </View>

          <View style={styles.bottomSection}>

            <View style={styles.clearView}>
              <TouchableOpacity>
                <Text style={styles.clearButton}>
                  Clear All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.applyView}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyText}>
                  Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </SafeAreaView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  title: {
    fontWeight: '500',
    fontSize: 18,
    // fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
    color: "#2B2C2D",
    marginTop: Platform.OS === 'ios' ? -60 : 10,
  },
  searchBar: {
    marginTop: 9,
    borderRadius: 12,
    borderColor: '#DDDDDD'
  },
  line1: {
    marginTop: 16,
    height: 1,
    backgroundColor: '#F4F2F2'
  },
  sectionHeader1: {
    marginTop: 24,
    fontSize: 18,
    // fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
    fontWeight: '500',
    color: '#2B2C2D'
  },
  blankItems1: {
    // fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginTop: -30
  },
  cuisinesData: {
    // fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 15
  },
  sectionHeader2: {
    marginTop: 24,
    fontSize: 18,
    // fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
    fontWeight: '500',
    color: '#2B2C2D'
  },
  blankItems2: {
    // fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginTop: -30
  },
  everythingData: {
    // fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 15
  },
  line2: {
    marginTop: 16,
    height: 1,
    backgroundColor: '#F4F2F2'
  },
  clearButton: {
    fontSize: Platform.OS === 'ios' ? 18 : 17,
    // fontFamily: 'gotham',
    fontWeight: '400',
    color: '#2B2C2D'
  },
  applyButton: {
    marginLeft: 77,
    width: 148,
    height: Platform.OS === 'ios' ? 45 : 40,
    borderRadius: 12,
    backgroundColor: '#E1251B'
  },
  applyText: {
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 11 : 9,
    fontSize: Platform.OS === 'ios' ? 18 : 17,
    // fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamBold',
    fontWeight: '600',
    color: '#FFFFFF'
  },
  applyView: {
    marginTop: 31,
  },
  clearView: {
    marginTop: Platform.OS === 'ios' ? 43 : 40,

  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5
  },
  section2: {
    marginTop: 24,
    flexDirection: 'row'
  },
  section1: {
    marginTop: 22,
    flexDirection: 'row'
  },
  middleSection: {
    marginTop: -10,
  },

})
export default ModalTester;
