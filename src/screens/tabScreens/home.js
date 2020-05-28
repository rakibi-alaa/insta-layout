import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
class  HomeScreen extends React.PureComponent {
    
    render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


export default HomeScreen;