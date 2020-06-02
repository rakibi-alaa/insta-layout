import React from 'react';
import {  FlatList, View,Dimensions,ScrollView, Image,TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');


const StoriesContainer = styled.ScrollView`
    width: ${width}px;
    height: 95px;
    display : flex;
    flex-direction : row;
    padding : 5px 0px 0px 0px;
    borderBottomWidth : 1px ;
    borderBottomColor : rgba(204,204,204, .9);
`

const StorieUserContainer = styled.TouchableOpacity`
`
const StoryImageContainer = styled.View`
    position : relative;
    width: 70px;
    height: 70px;
    border : 1px solid rgba(246, 36, 89, 1);
    border-radius : 50px;
    margin-left : 6px;
    padding : 3px;
`


const StorieUserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius : 50px;
    justify-content : center;
`

const UserAddStory = styled.View`
    position : absolute;
    width: 20px;
    height : 20px;
    border-radius : 50px;
    border : 2px solid #FFF;
    bottom : 0px;
    right : 0px;
    background-color : #0987e2;
`
const UserAddStoryPlus = styled.Text`
    text-align : center;
    line-height : 18px;
    color : #FFF;
    font-size : 19px;
    font-weight : 600;
`
const StoryUserName = styled.Text`
    width : 100%;
    text-align : center;
    font-size : 13px;
`

export default class Stories extends React.Component {

   
    render(){
    return (
        <StoriesContainer 
        onScroll={() => this.props.toggleScroll(false)}
        onMomentumScrollEnd={()=> this.props.toggleScroll(true)}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        >
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie1.jpeg')}/>
                    <UserAddStory >
                        <UserAddStoryPlus>+</UserAddStoryPlus>
                    </UserAddStory>
                </StoryImageContainer>
                <StoryUserName>Your story</StoryUserName>
            </StorieUserContainer> 
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie2.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Jon Doe</StoryUserName>
            </StorieUserContainer>
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie3.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Lahlou</StoryUserName>
            </StorieUserContainer>
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie4.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Carla</StoryUserName>
            </StorieUserContainer>
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie5.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Arouay</StoryUserName>
            </StorieUserContainer>
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie6.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Riim</StoryUserName>
            </StorieUserContainer>
            <StorieUserContainer>
                <StoryImageContainer>
                    <StorieUserImage  source={require('../../assets/stories/storie7.jpeg')}/>
                </StoryImageContainer>
                <StoryUserName>Mehdi</StoryUserName>
            </StorieUserContainer> 
            
            

        </StoriesContainer>
    );
    }
}

