import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import styled from 'styled-components/native'
import CameraScreen from './camera'
import TabNavigatorScreen from './TabsScreen';
import MessagingScreen from './messaging';
const { width, height } = Dimensions.get('window');
const StyledSafeAreaView = styled.View`
    width: 100%;
    height: 100%;
`
const StyledView = styled.View`
    width: ${width}px;
    height: 100%;
    background-color : beige;
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
      <StyledSafeAreaView >
        <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled={this.state.scroll}
            ref={ref => this.scrollView = ref}
            horizontal
          >
            <CameraScreen />
            <TabNavigatorScreen scrollTo={this.scrollTo} toggleScroll={this.toggleScroll} />
            <MessagingScreen />
          </ScrollView>
      </StyledSafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
