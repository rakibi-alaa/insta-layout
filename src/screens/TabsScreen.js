import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get('window');
class  HomeScreen extends React.PureComponent {
    componentDidMount(){
        console.log('Home mounted')
    }
    render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class  SettingsScreen extends React.PureComponent {
    componentDidMount(){
        console.log('settings mounted')
    }
    render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

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
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}