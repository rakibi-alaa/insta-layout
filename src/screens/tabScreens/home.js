import * as React from 'react';
import { Text, View ,Dimensions, SafeAreaView} from 'react-native';
import Header from '../../components/homeHeader'
import Stories from '../../components/homeStories'

const { width, height } = Dimensions.get('window');


class  HomeScreen extends React.PureComponent {
    
    render(){
      return (
        <SafeAreaView>
          <Header />
          <Stories toggleScroll={this.props.toggleScroll}/>
        </SafeAreaView>
      );
  }
}


export default HomeScreen;