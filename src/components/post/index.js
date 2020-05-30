import React from 'react';
import {  Text, View,Dimensions,ScrollView, Image,TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native'
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
import PostHeader from './postHeader';
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
    width :35px; 
    height : 28px;
    padding: 4px;
    border-radius : 15px;
    line-height : 19px;
    background-color : black;
    text-align : center;
    color : white;
    overflow : hidden;
`

export default function Post({item}){

    return (
        <PostContainer id={item.id}>
            <PostHeader />
            <PostImage source={require('../../../assets/stories/storie2.jpeg')} >
                <PostImageCount>1/5</PostImageCount>
            </PostImage>
        </PostContainer>
    );

}
