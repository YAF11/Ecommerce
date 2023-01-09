import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSendDrak, IconSendLight} from '../../../assets';

const InputChat = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDrak />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight />
    </TouchableOpacity>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? '#EDEEF0' : '#FFC700',
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
