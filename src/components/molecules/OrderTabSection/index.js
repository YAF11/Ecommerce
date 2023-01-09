/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';

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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: 'white',
        }}>
        <ItemListFood
          image={FoodDummy1}
          title="Sop Daging"
          price="Rp1.400.000"
          rating={4}
          type="in-progress"
          items={3}
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          title="Salad Buah"
          price="Rp1.400.000"
          rating={4}
          type="in-progress"
          items={3}
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy3}
          title="Kari"
          price="Rp1.400.000"
          rating={4}
          type="in-progress"
          items={3}
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy4}
          title="Coffee"
          price="Rp1.400.000"
          rating={4}
          type="in-progress"
          items={3}
          onPress={() => navigation.navigate('OrderDetail')}
        />
      </View>
    </ScrollView>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 24,
          backgroundColor: 'white',
        }}>
        <ItemListFood
          image={FoodDummy1}
          title="Sop Daging"
          price="Rp1.400.000"
          rating={4}
          type="past-orders"
          items={3}
          date="Nov 10, 14:00"
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy2}
          title="Salad Buah"
          price="Rp1.400.000"
          rating={4}
          type="past-orders"
          items={3}
          date="Okt 12, 09:00"
          status="Cancelled"
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy3}
          title="Kari"
          price="Rp1.400.000"
          rating={4}
          type="past-orders"
          items={3}
          date="Sep 11, 13:00"
          onPress={() => navigation.navigate('OrderDetail')}
        />
        <ItemListFood
          image={FoodDummy4}
          title="Coffee"
          price="Rp1.400.000"
          rating={4}
          type="past-orders"
          items={3}
          date="Jun 12, 14:00"
          status="Cancelled"
          onPress={() => navigation.navigate('OrderDetail')}
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
