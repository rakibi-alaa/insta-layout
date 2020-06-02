import React from 'react';
import { Text, View, TouchableOpacity ,Dimensions, FlatList} from 'react-native';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
import MessagesHeader from '../components/headers/messagesHeader'
import Discussion from '../components/discussion'
import styled from 'styled-components/native'
const { width, height } = Dimensions.get('window');

const SearchContainer = styled.View`
  width : 100%;
  height : 60px;
  flex-direction : row;
  justify-content : center;
  align-items  : center;
`
const SearchInput = styled.View`
  width : 100%;
  height : 40px;
  flex-direction : row;
  align-items  : center;
  padding-left : 7px;
  border : 1px solid #cdcdcd;
  border-radius :6px;
`

const BottomCTAToCamera = styled.View`
  position : absolute;
  bottom : 0px;
  width : 100%;
  height : 60px;
  background-color : #f8f8f8;
`

export default function MessagingScreen({mainNavigation, scrollTo}) {
  return (
    <View style={{ width : width,position: 'relative'}}>
      <MessagesHeader mainNavigation={mainNavigation}  scrollTo={scrollTo}/>
      
      
      <FlatList 
      data={[1,2,3,4,5,6,7,8,1,5,8,6,4,6,2,5,8]}
        ListHeaderComponent={()=>{
            return (
              <View>
                <SearchContainer>
                  <SearchInput>
                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <Path stroke="none" d="M0 0h24v24H0z"/>
                      <Circle cx="10" cy="10" r="7"/>
                      <Line x1="21" y1="21" x2="15" y2="15"/>
                    </Svg>
                    <Text style={{fontSize : 19, fontWeight : '200',paddingLeft : 6}}>Search</Text>
                  </SearchInput>
                </SearchContainer>
                <Text style={{fontSize : 15 ,paddingVertical : 6}}>Messages</Text>
              </View>
            )
        }}
        contentContainerStyle={{paddingHorizontal : 10}}
        keyExtractor={item => item + '' + Math.random()}
        renderItem={({item,index})=>{
          return <Discussion item={item} key={index}/>
        }}
      />
      <BottomCTAToCamera />
    </View>
  );
}