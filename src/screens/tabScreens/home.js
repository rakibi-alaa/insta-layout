import * as React from 'react';
import { Text, View ,Dimensions, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/headers/homeHeader' 
import Stories from '../../components/homeStories'
import Post from '../../components/post'
const { width, height } = Dimensions.get('window');


class  HomeScreen extends React.PureComponent {
    renderItem = ({item,index}) =>{
        return (
          <Post key={index} item={item} mainNavigation={this.props.mainNavigation}/>
        )
    }
    render(){
      return (
        <View style={{backgroundColor : '#FFF'}}>
          <Header scrollTo={this.props.scrollTo}/>
          <FlatList
          ListHeaderComponent={() => {
            return <Stories toggleScroll={this.props.toggleScroll}/>
          }}
          showsVerticalScrollIndicator={false}
          data={[1,2,3]} 
          renderItem={this.renderItem}
          keyExtractor={item => item + ''}
          contentContainerStyle={{paddingBottom : 70,backgroundColor:'#fff'}}
          />
        </View>
      );
  }
}


export default HomeScreen;