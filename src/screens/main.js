import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import styled from 'styled-components/native'
import CameraScreen from './camera'
import TabNavigatorScreen from './TabsScreen';
import MessagingScreen from './messaging';
const { width, height } = Dimensions.get('window');
const StyledSafeAreaView = styled.View`
    width: 100%;
    height: 100%;
`
const StyledView = styled.View`
    width: ${width}px;
    height: 100%;
    background-color : beige;
`
export default function Main() {
  return (
    <StyledSafeAreaView>
      <ScrollView
          showsVerticalScrollIndicator={true}
          //snapToInterval={width}
          pagingEnabled
          horizontal
          
        >
          <CameraScreen />
          <TabNavigatorScreen />
          <MessagingScreen />
        </ScrollView>
    </StyledSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
