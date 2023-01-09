import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components/';
import {getData} from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, ingredients, rate, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  const onCounterChange = value => {
    console.log('counter: ', value);
    setTotalItem(value);
  };

  const onCart = () => {
    navigation.navigate('Cart');
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const ongkir = 25000;
    const tax = (2.5 / 100) * totalPrice;
    const total = totalPrice + ongkir + tax;
    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        ongkir,
        tax,
        total,
      },
      userProfile,
    };
    console.log('data for checkout: ', data);
    navigation.navigate('OrderSummary', data);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cart}
            onPress={() => onCart()}>
            <Icon name="cart-outline" size={25} color="#020202" />
          </TouchableOpacity>
          <View style={styles.button}>
            <Button text="Order Now" onPress={() => onOrder()} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {width: 30, height: 30, justifyContent: 'center', alignItems: 'center'},
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
  cart: {
    backgroundColor: '#FFC700',
    borderRadius: 8,
    padding: 11,
    marginRight: 10,
  },
});
