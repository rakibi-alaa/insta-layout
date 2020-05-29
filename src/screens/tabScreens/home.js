import * as React from 'react';
import { Text, View ,Dimensions, SafeAreaView} from 'react-native';
import Header from '../../components/header'

const { width, height } = Dimensions.get('window');


class  HomeScreen extends React.PureComponent {
    
    render(){
    return (
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    );
  }
}


export default HomeScreen;