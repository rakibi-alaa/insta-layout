

import React from 'react';
import {  Text, View,Dimensions,ScrollView, Image ,Platform} from 'react-native';
import styled from 'styled-components/native'
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
const { width, height } = Dimensions.get('window');



const HeaderContainer = styled.View`
    width: ${width}px;
    margin-top :${Platform.OS === 'android' ? 25: 0}px;
    height: 38px;
    display : flex;
    flex-direction : row;
    justify-content:space-between;
    align-items : center;
    padding : 7px 5px;
    borderBottomWidth : 1px;
    borderBottomColor : rgba(204,204,204, .9);
`
const IconContainers = styled.View`
    flex-direction : row;
    justify-content:space-between;
    align-items : center;
`


const IconContainer = styled.TouchableOpacity``


export default function MessagesHeader({scrollTo}) {
  return (
    <HeaderContainer>
        <IconContainers>
            <IconContainer onPress={() => {scrollTo(width)}}>
            <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Line x1="5" y1="12" x2="19" y2="12" />
                <Line x1="5" y1="12" x2="11" y2="18" />
                <Line x1="5" y1="12" x2="11" y2="6" />
            </Svg>
            </IconContainer>
            <Text style={{fontSize : 18,fontWeight : '400'}}> Direct</Text>
        </IconContainers>
        <IconContainers>
        <IconContainer style={{marginRight : 10}}>
        <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-aperture" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z"/>
            <Circle cx="12" cy="12" r="9" />
            <Line x1="3.6" y1="15" x2="14.15" y2="15" />
            <Line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
            <Line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
            <Line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
            <Line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
        </Svg>
        </IconContainer>
        <IconContainer>
        <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z"/>
            <Path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
            <Path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
            <Line x1="16" y1="5" x2="19" y2="8" />
        </Svg>
        </IconContainer>
        </IconContainers>
    </HeaderContainer>
  );
}
