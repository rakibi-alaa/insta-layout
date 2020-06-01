import React from 'react';
import { Text, View, TouchableOpacity ,Dimensions} from 'react-native';

import MessagesHeader from '../components/headers/messagesHeader'

const { width, height } = Dimensions.get('window');




export default function MessagingScreen() {
  return (
    <View style={{ width : width,position: 'relative'}}>
      <MessagesHeader></MessagesHeader>
    </View>
  );
}