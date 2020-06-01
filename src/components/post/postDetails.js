import React from 'react';
import {  Text,Dimensions,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');
import Svg, { Rect, Line,Path,G } from 'react-native-svg';

const PostDetailsContainer = styled.View`
    width: ${width}px;
    padding : 0px 12px;

`
const LikesCount = styled.Text`
    font-size : 15px;
    font-weight : 600;
`
const DescriptionContainer = styled.View`
    padding-top : 5px;
`
const DescriptionUserName = styled.Text`
    font-size : 12px;
    font-weight : 700;
`
const DescriptionText = styled.Text`
    font-size : 12px;
`

const SeeTheComments = styled.Text`
    margin-top : 7px;
    font-size : 13px;
    color : gray;
`


export default function PostDetails({showComments}){
    return (
        <PostDetailsContainer>
           <LikesCount>1 234 Likes</LikesCount>
           <DescriptionContainer>
                
            <DescriptionText><DescriptionUserName>Jon Doe</DescriptionUserName> Missing my quarantine family, Not only did we get to experience Kentucky and the wonderfull fplaces Not only did we get to experience Kentucky and the wonderfull fplaces</DescriptionText>
            
           </DescriptionContainer>

        </PostDetailsContainer>
    );

}
