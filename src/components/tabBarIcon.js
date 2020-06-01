import React from 'react';
import {  Text, View,Dimensions,ScrollView, Image,TouchableWithoutFeedback } from 'react-native';
import Svg, { Circle, Line,Path,G,Polyline,Rect } from 'react-native-svg';
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');


const ProfileContainer = styled.View`
    position : relative;
    width: 29px;
    height: 29px;
    border : 1px solid;
    border-radius : 50px;
    margin-left : 6px;
    padding : 1px;
`


const ProfileUserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius : 50px;
    justify-content : center;
`


export default function TabBarIcon({route,focused}){

   switch (route.name) {
       case "Home":
           console.log(focused)
           return (
            <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" >
                <Path stroke="none" d="M0 0h24v24H0z" />
                <Polyline points="5 12 3 12 12 3 21 12 19 12" strokeWidth={focused ? "2" : "0.8"} />
                <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"  strokeWidth={focused ? "2" : "0.8"} />
                <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" strokeWidth={focused ? "2" : "0.8"} />
            </Svg>
           )
           break;
        case "Search":
            return (
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z" strokeWidth={focused ? "2.2" : "0.8"}/>
                    <Circle cx="10" cy="10" r="7" strokeWidth={focused ? "2.2" : "0.8"}/>
                    <Line x1="21" y1="21" x2="15" y2="15" strokeWidth={focused ? "2.2" : "0.8"}/>
                </Svg>
            )
            break;
           break;
        case "Media":
            return (
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-plus" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z"/>
                    <Rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={focused ? "2.2" : "0.8"}/>
                    <Line x1="8" y1="12" x2="16" y2="12" strokeWidth={focused ? "2.2" : "0.8"}/>
                    <Line x1="12" y1="8" x2="12" y2="16" strokeWidth={focused ? "2.2" : "0.8"}/>
                </Svg>
            )
            break;
           break;
        case "Likes":
            return (
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke={focused ? 'red' : '#2c3e50'} fill="none" stroke-linecap="round"  stroke-linejoin="round">
                        
                        <Path stroke="none" d="M0 0h24v24H0z"/>
                        <Path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" fill={focused ? 'red' : 'none'} strokeWidth="0.8"/>
                </Svg>
            )
            break;
           break;
        case "Profile":
            return (
                <ProfileContainer style={{ borderWidth :focused ? 2:1 ,borderColor : focused ? 'black' : 'rgba(204,204,204, .9)'}}>
                    <ProfileUserImage source={require('../../assets/stories/storie1.jpeg')} />
                </ProfileContainer>
            )
            break;
   
       default:
           break;
   }
    
}
