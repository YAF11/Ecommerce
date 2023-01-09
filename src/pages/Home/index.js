/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCategory, Gap, HeaderMain, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <HeaderMain />
      <View style={{marginHorizontal: -24}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCategoryContainer}>
            <Gap width={24} />
            {food.map(itemFood => {
              return (
                <FoodCategory
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  onPress={() => navigation.navigate('Category')}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Gap height={12} />
      <View style={{flex: 1, marginHorizontal: -24, marginBottom: -24}}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {padding: 24, flex: 1},
  foodCategoryContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
});
