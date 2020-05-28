import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
class  SearchScreen extends React.PureComponent {
    
    render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
}


export default SearchScreen;