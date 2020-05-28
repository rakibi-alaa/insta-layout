import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get('window');

import HomeScreen from './tabScreens/home'
import SearchScreen from './tabScreens/search'
import MediaScreen from './tabScreens/media'
import LikesScreen from './tabScreens/likes'
import ProfileScreen from './tabScreens/profile'

const Tab = createBottomTabNavigator();

export default function TabNavigatorScreen() {
  return (
    <View style ={{width : width}}>
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
            style: {height : 60,},
            tabStyle : {
                height : 55,
            },
            labelStyle:{
                lineHeight : 55
            }
        }}
        
        style={{backgroundColor : 'red'}}>
        <Tab.Screen name="Home"  component={HomeScreen} />
        <Tab.Screen name="Search"  component={SearchScreen} />
        <Tab.Screen name="Media"  component={MediaScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}