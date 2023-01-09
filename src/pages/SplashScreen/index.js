/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logoj} from '../../assets';
import {Gap} from '../../components';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logoj />
      <Gap height={38} />
      <Text
        style={{color: '#020202', fontSize: 32, fontFamily: 'Poppins-Medium'}}>
        Jajan Kuy
      </Text>
    </View>
  );
};

export default SplashScreen;
