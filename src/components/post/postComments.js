import React,{useRef} from 'react';
import { View, Text,Dimensions,TouchableOpacity, Animated,Easing } from 'react-native';
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
const CommentUserName = styled.Text`
    font-size : 12px;
    font-weight : 700;
`
const CommentText = styled.Text`
    padding-top : 5px;
    font-size : 12px;
`

const SeeTheComments = styled.Text`
    margin-top : 7px;
    font-size : 13px;
    color : gray;
`


export default function PostComments(){
    const commentsShow = useRef(new Animated.Value(0)).current;
    const commentsOpacity = useRef(new Animated.Value(0)).current;

    const showComments = () => {
        Animated.timing(commentsShow,{
            toValue : 30,
            easing : Easing.bezier(.17,.67,.66,.7),
            duration : 200
        }).start();
        Animated.timing(commentsOpacity,{
            toValue : 1,
            delay : 150,
            duration : 80
        }).start();
      };
    return (
        <View style={{paddingLeft : 13,paddingTop : 5}}>
            <TouchableOpacity onPress={showComments}>
                <SeeTheComments>See the 1 comments</SeeTheComments>
            </TouchableOpacity>
            <Animated.View style={{width:width,height : commentsShow , opacity : commentsOpacity}}>
                <CommentText><CommentUserName>Arouay</CommentUserName>  Dude! long time no see :/</CommentText>
            </Animated.View>
        </View>
    );

}
