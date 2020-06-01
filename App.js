import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import MainScreen from './src/screens/main'
import comments from './src/screens/messaging'
const Stack = createStackNavigator();

const StyledView = styled.View`
    width: 100%;
    height: 100%;
    padding-top : ${Platform.OS === 'android' ? 20 : 32}px;
`
export default function App() {
  
  return (
   <StyledView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle : {backgroundColor : '#FFF'}
        }}>
        <Stack.Screen name="Container" component={MainScreen} />
        <Stack.Screen name="Comments" component={comments} />
      </Stack.Navigator>
    </NavigationContainer>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
