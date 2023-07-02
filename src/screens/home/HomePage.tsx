import React from 'react';
import {ImageBackground, View} from 'react-native';
import {homeStyle} from './homeStyle';

const HomePage = () => (
  <View style={homeStyle.container}>
    <ImageBackground
      source={require('../../assets/images/bg.webp')}
      resizeMode="cover"
      style={homeStyle.image}></ImageBackground>
  </View>
);

export default HomePage;
