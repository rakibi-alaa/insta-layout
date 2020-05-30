import React,{ useState } from 'react';
import {  Text,Dimensions,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');
import Svg, { Rect, Line,Path,G } from 'react-native-svg';

const PostBottomReactionsContainer = styled.View`
    width: ${width}px;
    height : 60px;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    padding : 0px 7px;

`
const LeftIcons = styled.View`
    width:110px;    
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`
const RightIcons = styled.View`
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`



export default function PostBottomReactions(){
    const [liked, setLiked] = useState(false);
    return (
        <PostBottomReactionsContainer>
            <LeftIcons>
            <TouchableOpacity onPress={()=> setLiked(!liked)}>
                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke={liked ? 'red' : '#2c3e50'} fill="none" stroke-linecap="round"  stroke-linejoin="round">
                        
                        <Path stroke="none" d="M0 0h24v24H0z"/>
                        <Path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" fill={liked ? 'red' : 'none'}/>
                    </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
                <Svg xmlns="http://www.w3.org/2000/Svg" class="icon icon-tabler icon-tabler-message-circle" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z"/>
                    <Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z"/>
                    <Line x1="10" y1="14" x2="21" y2="3" />
                    <Path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                </Svg>
            </TouchableOpacity>
            </LeftIcons>
            <RightIcons>
             <TouchableOpacity>
             <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </Svg>
            </TouchableOpacity> 
            </RightIcons>
        </PostBottomReactionsContainer>
    );

}
