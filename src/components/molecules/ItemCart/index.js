import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Counter from '../Counter';
import Number from '../Number';

const ItemCart = ({image, title, price}) => {
  const [totalItem, setTotalItem] = useState(1);
  const onCounterChange = value => {
    console.log('counter: ', value);
    setTotalItem(value);
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Number number={totalItem * price} style={styles.priceTotal} />
      </View>
      <View>
        <Counter onValueChange={onCounterChange} />
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
