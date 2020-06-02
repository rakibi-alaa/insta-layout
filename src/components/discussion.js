import React from 'react';
import {  Text, View,Dimensions,ScrollView, Image,TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native'
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
const { width, height } = Dimensions.get('window');


const DiscussionContainer = styled.TouchableOpacity`
    width: ${width}px;
    height: 60px;
    flex-direction : row;
`
const UserImageContainer = styled.View`
    position : relative;
    width: 55px;
    height: 55px;
    border : 1px solid rgba(246, 36, 89, 1);
    border-radius : 50px;
    padding : 3px;
`
const UserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius : 50px;
    justify-content : center;
`

const UserNameAndText = styled.View`
padding-left : 7px;
    flex-direction : column;
    justify-content : space-around;
`

export default class Discussion extends React.Component {

   
    render(){
        let source = null;
        switch (this.props.item) {
            case 1:
                source = require('../../assets/stories/storie'+ 1 + '.jpeg');
                break;
            case 2:
                source = require('../../assets/stories/storie'+ 2 + '.jpeg');
                break;
            case 3:
                source = require('../../assets/stories/storie'+ 3 + '.jpeg');
                break;
            case 4:
                source = require('../../assets/stories/storie'+ 4 + '.jpeg');
                break;
            case 5:
                source = require('../../assets/stories/storie'+ 5 + '.jpeg');
                break;
            case 6:
                source = require('../../assets/stories/storie'+ 6 + '.jpeg');
                break;
            case 7:
                source = require('../../assets/stories/storie'+ 7 + '.jpeg');
                break;
            case 8:
                source = require('../../assets/stories/storie'+ 8 + '.jpeg');
                break;
        
            default:
                source = require('../../assets/stories/storie'+ 1 + '.jpeg');
                break;
        }

    return (
        <DiscussionContainer>
            <UserImageContainer >
                <UserImage source={source} />
            </UserImageContainer>
            <View style={{flexDirection : 'row',justifyContent: 'space-between',alignItems : 'center',width :width -75,height : 60}}>
                <UserNameAndText >
                    <Text>User name</Text>
                    <Text>User sending a message to someone</Text>
                </UserNameAndText>
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccc" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z"/>
                    <Path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <Circle cx="12" cy="13" r="4"  />
                </Svg>
            </View>
            
        </DiscussionContainer>
    );
    }
}

