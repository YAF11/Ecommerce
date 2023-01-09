import {View, Text} from 'react-native';
import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItems = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItems;
