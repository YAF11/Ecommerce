import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';

const ItemListMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
});
