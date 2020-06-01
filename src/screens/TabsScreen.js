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
import TabBarIcon from '../components/tabBarIcon'

const Tab = createBottomTabNavigator();

export default function TabNavigatorScreen({toggleScroll,scrollTo}) {
  return (
    <View style ={{width : width}}>
      <Tab.Navigator 
      tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel : false,
            style: {height : 60,borderTopWidth : 1.5,borderTopColor : 'rgba(204,204,204, .3)'},
            tabStyle : {
                height : 55,
            },
            labelStyle:{
                lineHeight : 55
            }
        }}
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <TabBarIcon route={route} focused={focused} size={size} color={color} />;
          },
        })}
        
        style={{backgroundColor : 'red'}}>
        <Tab.Screen name="Home">
        {() => <HomeScreen toggleScroll={toggleScroll} scrollTo={scrollTo} />}
        </Tab.Screen>
        <Tab.Screen name="Search"  component={SearchScreen} />
        <Tab.Screen name="Media"  component={MediaScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}