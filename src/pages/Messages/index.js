import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ProfileDummy} from '../../assets/Dummy';
import {ListMessages} from '../../components';
import {IcBack} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: ProfileDummy,
      name: 'Yaff',
      desc: 'Ready gan?',
    },
    {
      id: 2,
      profile: ProfileDummy,
      name: 'Nairobi Putri Hayza',
      desc: 'Kpn dikirim gan?',
    },
    {
      id: 3,
      profile: ProfileDummy,
      name: 'John McParker Steve',
      desc: 'Ok gan...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <IcBack />
          </TouchableOpacity>
          <Text style={styles.title}>Chat</Text>
        </View>
        {doctors.map(doctor => {
          return (
            <View style={styles.ListContainer}>
              <ListMessages
                key={doctor.id}
                profile={doctor.profile}
                name={doctor.name}
                desc={doctor.desc}
                onPress={() => navigation.navigate('Chat')}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  ListContainer: {backgroundColor: 'white'},
});
