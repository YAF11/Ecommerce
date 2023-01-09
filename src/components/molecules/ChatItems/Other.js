import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={ProfileDummy} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Silahkan diorder kk</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: '#FFC700',
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  date: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginTop: 8,
  },
});
