import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
class  MediaScreen extends React.PureComponent {
    
    render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Media!</Text>
      </View>
    );
  }
}


export default MediaScreen;