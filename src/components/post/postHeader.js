import React from 'react';
import {  Text,Dimensions,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');

const PostHeaderContainer = styled.View`
    width: ${width}px;
    height : 60px;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    padding : 0px 7px;

`

const PostHeaderImageAndUserName = styled.View`
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`

const PostHeaderImageContainer= styled.View`
    width: 40px;
    height: 40px;
    border : 1px solid rgba(246, 36, 89, 1);
    border-radius : 50px;
    margin-right: 7px;
    padding : 2px;
`

const PostHeaderImage= styled.Image`
    width: 100%;
    height: 100%;
    border-radius : 50px;
    justify-content : center;
`

const PostHeaderUserName= styled.Text`
    font-size : 14px;
    color :#000 ;
`


export default function PostHeader(){

    return (
        <PostHeaderContainer>
            <PostHeaderImageAndUserName>
                <PostHeaderImageContainer>
                    <PostHeaderImage source={require('../../../assets/stories/storie1.jpeg')}/>
                    
                </PostHeaderImageContainer>
                <PostHeaderUserName>Jon Doe</PostHeaderUserName>
            </PostHeaderImageAndUserName>
            <TouchableOpacity >
                <Text style={{lineHeight : 9,height:7,fontSize : 20,fontWeight : 'bold'}}>.</Text>
                <Text style={{lineHeight : 9,height:7,fontSize : 20,fontWeight : 'bold'}}>.</Text>
                <Text style={{lineHeight : 9,height:7,fontSize : 20,fontWeight : 'bold'}}>.</Text>
            </TouchableOpacity>
        </PostHeaderContainer>
    );

}
