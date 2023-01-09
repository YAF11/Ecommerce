import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, ShopTabSection} from '../../components';
import {IcBack, ProfileDummy} from '../../assets';

const Shop = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <IcBack />
          </TouchableOpacity>
          <Text style={styles.name}>Toko Saya</Text>
        </View>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Yafi' Irsyad</Text>
      </View>
      <View style={styles.content}>
        <ShopTabSection />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Tambah Produk"
          onPress={() => navigation.navigate('AddProduct')}
        />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  page: {flex: 1},
  profileDetail: {backgroundColor: 'white', paddingBottom: 26},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  photo: {alignItems: 'center', marginTop: 20, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  content: {flex: 1, marginTop: 24},
  buttonContainer: {padding: 24},
});
