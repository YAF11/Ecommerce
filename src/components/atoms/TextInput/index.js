import {
  StyleSheet,
  Text,
  TextInput as TextInputRN,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TextInput = ({label, placeholder, pw, em, ...restProps}) => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {em && (
        <TextInputRN
          style={styles.input}
          placeholder={placeholder}
          {...restProps}
        />
      )}
      {pw && (
        <>
          <TextInputRN
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={visible}
            {...restProps}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}
            style={styles.icon}>
            {show === false ? (
              <Icon name="eye-outline" size={25} />
            ) : (
              <Icon name="eye-off-outline" size={25} />
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 10},
  icon: {position: 'absolute', right: 20, top: 38},
});
