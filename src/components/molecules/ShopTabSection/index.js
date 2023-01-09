/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1} from '../../../assets';
import ItemListFood from '../ItemListFood';
import ItemListMenu from '../ItemListMenu';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.5,
    }}
    style={{backgroundColor: '#FFFFFF'}}
    tabStyle={{width: 'auto'}}
    scrollEnabled={true}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Product = () => {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: 'white',
      }}>
      <ItemListFood
        image={FoodDummy1}
        title="Sop Daging"
        price="40.000"
        type="order-summary"
        items={3}
      />
    </View>
  );
};
const SoldOut = () => {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: 'white',
      }}>
      <ItemListFood
        image={FoodDummy1}
        title="Sop Daging"
        price="40.000"
        type="order-summary"
        items={3}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: Product,
  2: SoldOut,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Product'},
    {key: '2', title: 'SoldOut'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
