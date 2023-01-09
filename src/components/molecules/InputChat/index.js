import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ButtonChat} from '../../atoms';

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Yaff"
        value={value}
        onChangeText={onChangeText}
      />
      <ButtonChat disable={value.length < 1} onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: 'white'},
  input: {
    backgroundColor: '#EDEEF0',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    maxHeight: 45,
  },
});

export default InputChat;
