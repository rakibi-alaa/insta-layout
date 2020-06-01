import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/main'
import comments from './src/screens/messaging'
const Stack = createStackNavigator();

export default function App() {
  
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle : {backgroundColor : '#FFF'}
        }}>
        <Stack.Screen name="Container" component={MainScreen} />
        <Stack.Screen name="Comments" component={comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
