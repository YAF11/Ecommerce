import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Swing} from 'react-native-animated-spinkit';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Swing size={50} color="#FFC700" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
    color: '#020202',
  },
});
