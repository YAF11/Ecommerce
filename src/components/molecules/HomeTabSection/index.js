/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, [dispatch]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: 'white',
        }}>
        {newTaste.map(item => {
          return (
            <ItemListFood
              key={item.id}
              image={{uri: item.picturePath}}
              title={item.name}
              price={item.price}
              rating={item.rate}
              type="product"
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, [dispatch]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: 'white',
        }}>
        {popular.map(item => {
          return (
            <ItemListFood
              key={item.id}
              image={{uri: item.picturePath}}
              title={item.name}
              price={item.price}
              rating={item.rate}
              type="product"
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, [dispatch]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: 'white',
        }}>
        {recommended.map(item => {
          return (
            <ItemListFood
              key={item.id}
              image={{uri: item.picturePath}}
              title={item.name}
              price={item.price}
              rating={item.rate}
              type="product"
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({});
