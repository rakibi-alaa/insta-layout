import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity ,Dimensions} from 'react-native';
import { Camera } from 'expo-camera';
const { width, height } = Dimensions.get('window');
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{backgroundColor : '#000'}}>
    <View style={{ width : width,height : 600,marginTop : 100,backgroundColor : '#000',borderBottomWidth : 1,borderTopWidth : 1,borderColor : '#FFF'}}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          
        </View>
        
      </Camera>

      
    </View>
    <TouchableOpacity style={{
              width : 100,
              height : 100,
              justifyContent : 'center',
              alignItems : 'center',
            }} onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
    </TouchableOpacity>
    </View>
  );
}