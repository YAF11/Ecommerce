import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ChatItems, InputChat} from '../../components';
import {IcBack} from '../../assets';

const Chat = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <IcBack />
        </TouchableOpacity>
        <Text style={styles.title}>Yaff</Text>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItems isMe />
          <ChatItems />
          <ChatItems isMe />
        </ScrollView>
      </View>
      <InputChat
        value="Ready gan?"
        onChangeText={() => alert('input tap')}
        onButtonPress={() => alert('button press')}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, backgroundColor: 'white'},
  chatDate: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginVertical: 20,
    textAlign: 'center',
  },
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
});
