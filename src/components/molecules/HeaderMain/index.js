import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HeaderMain = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: -10}}>
      <View style={styles.top}>
        <View style={styles.wrapperSearch}>
          <Icon name="search" size={20} color="#020202" />
          <TextInput placeholder="Mau Cari Apa?" />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={25} color="#020202" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Messages')}>
          <Icon name="chatbubbles-outline" size={25} color="#020202" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#dee2e6',
    borderRadius: 10,
    width: '70%',
    height: 40,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
});
