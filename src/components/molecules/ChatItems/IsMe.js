import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Ready gan?</Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: '#e5e5e5',
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
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
