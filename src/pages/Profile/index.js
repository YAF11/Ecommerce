import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.tokoContainer}
          onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.tokoText}>Toko Saya</Text>
          <Icon name="chevron-forward-outline" size={20} color="#020202" />
        </TouchableOpacity>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image
              source={{uri: userProfile.profile_photo_url}}
              style={styles.photoContainer}
            />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  tokoContainer: {
    backgroundColor: '#FFC700',
    width: 100,
    height: 30,
    position: 'absolute',
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  tokoText: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#020202'},
  content: {flex: 1, marginTop: 24},
  profileDetail: {backgroundColor: 'white', paddingBottom: 26},
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
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
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
