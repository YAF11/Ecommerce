import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Header, ItemListFood} from '../../components';
import {FoodDummy1} from '../../assets';
import {getFoodData} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Header title="Category" onBack={() => navigation.goBack()} />
      <View style={styles.foodContainer}>
        {food.map(item => {
          return (
            <ItemListFood
              key={item.id}
              image={{uri: item.picturePath}}
              title={item.name}
              price={item.price}
              rating={item.rate}
              type="product"
            />
          );
        })}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  foodContainer: {
    paddingTop: 8,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    marginTop: 24,
  },
});
