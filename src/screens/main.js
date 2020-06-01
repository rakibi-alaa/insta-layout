import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Platform} from 'react-native';
import styled from 'styled-components/native'
import CameraScreen from './camera'
import TabNavigatorScreen from './TabsScreen';
import MessagingScreen from './messaging';
const { width, height } = Dimensions.get('window');
const StyledView = styled.View`
    width: 100%;
    height: 100%;
    padding-top : ${Platform.OS === 'android' ? 20 : 32}px;
`

export default class Main extends React.Component {

  constructor() {
    super();
    this.toggleScroll = this.toggleScroll.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
		this.state = {
      scroll : true
		};
  }
  
  componentDidMount(){
   
    setTimeout(()=>{
      this.scrollView.scrollTo({x: width,animated : false})
    },1)
  }
  toggleScroll(bool){
    this.setState({scroll : bool})
  }
  scrollTo(x){
    this.scrollView.scrollTo({x: x,animated : true})
  }

  render(){
    
    return (
      <StyledView>
        <ScrollView
        nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled={this.state.scroll}
            ref={ref => this.scrollView = ref}
            horizontal
          >
            <CameraScreen />
            <TabNavigatorScreen mainNavigation={this.props.navigation} scrollTo={this.scrollTo} toggleScroll={this.toggleScroll} />
            <MessagingScreen />
          </ScrollView>
      </StyledView>
    );
  }
  
}

