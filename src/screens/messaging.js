import React from 'react';
import { Text, View, TouchableOpacity ,Dimensions} from 'react-native';

import MessagesHeader from '../components/headers/messagesHeader'
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');




export default function MessagingScreen({mainNavigation, scrollTo}) {
  return (
    <View style={{ width : width,position: 'relative'}}>
      <MessagesHeader mainNavigation={mainNavigation}  scrollTo={scrollTo}/>
      
    </View>
  );
}