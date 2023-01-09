import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FoodDummy1, IcBack} from '../../assets';
import {Button, ItemCart, Number} from '../../components';

const Cart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <IcBack />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.content}>
        <ItemCart image={FoodDummy1} title="Sop Daging" price="50000" />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.labelTotal}>Total Price:</Text>
          <Number number={100000} style={styles.priceTotal} />
        </View>
        <View style={styles.button}>
          <Button text="Order Now" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  content: {flex: 1},
  footer: {flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 16},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
