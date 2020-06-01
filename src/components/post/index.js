import React,{useRef} from 'react';
import {  Text, View,Dimensions,ScrollView, Image,TouchableWithoutFeedback,Animated,Easing } from 'react-native';
import styled from 'styled-components/native'
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
import PostHeader from './postHeader';
import PostBottomReactions from './postBottomReactions';
import PostDetails from './postDetails';
import PostComments from './postComments';
const { width, height } = Dimensions.get('window');

const PostContainer = styled.View`
    width: ${width}px;

`
const PostImage = styled.ImageBackground`
position : relative;
    width: ${width}px;
    height : 400px;
    justify-content : center;
`
const PostImageCount = styled.Text`
    position : absolute;
    top: 10px;
    right : 10px;
    padding: 4px 8px;
    border-radius : 13px;
    background-color : black;
    text-align : center;
    color : white;
    overflow : hidden;
`


export default function Post({item,mainNavigation}){
    
    return (
        <PostContainer id={item.id}>
            <PostHeader />
            <PostImage source={require('../../../assets/stories/storie2.jpeg')} >
                <PostImageCount>
                    <Text>1/2</Text>
                </PostImageCount>
            </PostImage>
            <PostBottomReactions />
            <PostDetails/>
            <PostComments mainNavigation={mainNavigation}/>
        </PostContainer>
    );

}
