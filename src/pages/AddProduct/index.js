import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBack} from '../../assets';
import {Button, Gap, Select} from '../../components';

const AddProduct = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.profileDetail}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.back}>
              <IcBack />
            </TouchableOpacity>
            <Text style={styles.name}>Tambah Produk</Text>
          </View>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.namaProdukContainer}>
          <Text style={styles.label}>Nama Produk</Text>
          <TextInput placeholder="Masukkan Nama Produk" />
        </View>
        <View style={styles.namaProdukContainer}>
          <Text style={styles.label}>Deskripsi Produk</Text>
          <TextInput placeholder="Masukkan Deskripsi Produk" />
        </View>
        <View style={styles.namaProdukContainer}>
          <Select label="Kategori" />
          <Gap height={20} />
          <View style={styles.priceContainer}>
            <Text style={styles.label}>Harga</Text>
            <TextInput placeholder="Atur" />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.label}>Stok</Text>
            <TextInput placeholder="0" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Tampilkan" />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProduct;

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
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 80,
    height: 80,
    borderRadius: 8,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    padding: 15,
  },
  addPhoto: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  namaProdukContainer: {
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {fontSize: 15, fontFamily: 'Popppins-Medium', color: '#020202'},
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {padding: 24, marginTop: 24},
});
