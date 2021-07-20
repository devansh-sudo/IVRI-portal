import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Assets } from '../assets/index';

export default function Splashscreen() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex:1,
 
        resizeMode: 'contain',
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'white',
alignItems:'center',
          top:240
        }}>
        <Image
          style={{ height: 220, width: 220, alignSelf: 'center' }}
          source={Assets.logo}
        />
      </View>
     
    </View>
  );
}
