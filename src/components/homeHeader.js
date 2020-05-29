import React from 'react';
import {  Text, View,Dimensions,ScrollView, Image ,Platform} from 'react-native';
import styled from 'styled-components/native'
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
const { width, height } = Dimensions.get('window');


const IconWithFlag = styled.TouchableOpacity`
   position : relative;
`
const IconLeft = styled.TouchableOpacity`
   justify-content : flex-start;
`

const IconFlag = styled.View`
   position : absolute;
   padding : 2px 4px;
   background-color : rgba(246, 71, 71, 1);
   border-radius : 50px;
   top:0;
   right: 0;
`
const Flag = styled.Text`
    text-align : center;
    line-height : 12px;
    font-size : 9px;
   font-weight : 600;
`

const Title = styled.Text`
   
    font-size : 19px;
   font-weight : 600;
`
const HeaderContainer = styled.View`
    width: ${width}px;
    margin-top :${Platform.OS === 'android' ? 25: 0}px;
    height: 45px;
    display : flex;
    flex-direction : row;
    justify-content:space-between;
    align-items : center;
    padding : 7px;
    borderBottomWidth : 1px ;
    borderBottomColor : rgba(204,204,204, .9);
`



export default function Header({openCamera,openMessages}) {
  return (
    <HeaderContainer>
        <IconLeft onPress={openCamera}>
        <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z"/>
            <Path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
            <Circle cx="12" cy="13" r="3" />
        </Svg>
        </IconLeft>
        <Title>Instagram</Title>
        <IconWithFlag onPress={openMessages}>
        <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z"/>
            <Line x1="10" y1="14" x2="21" y2="3" />
            <Path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
        </Svg>
        <IconFlag>
            <Flag>4</Flag>
        </IconFlag>
        </IconWithFlag>
    </HeaderContainer>
  );
}
