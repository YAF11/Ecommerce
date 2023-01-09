import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from '../Counter';
import Number from '../Number';
import Rating from '../Rating';

// TYPE:
// 1. product
// 2. order-summary
// 3. in-Progress
// 4. past-orders

const ItemListFood = ({
  image,
  title,
  price,
  onPress,
  items,
  rating,
  type,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product seperti di home page
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        //item order summary
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        //item in progress
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>
                {items} items . Rp{price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        //item past orders
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>
                {items} items . Rp{price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        //item chart
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>Rp{price}</Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Counter />
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>{renderContent()}</View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
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
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#D9435E'},
});
