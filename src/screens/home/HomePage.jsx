import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const backgorund = {}

{/* <Image
style={{width: 50, height: 50}}
source={require('../images/logo-weride.webp')}
/> */}

const background = {uri: ''}

const HomePage = () => (
    <View style={styles.container}>
      <ImageBackground source={require('../../images/bg.webp')} resizeMode="cover" style={styles.image}>

      </ImageBackground>
    </View>
  );
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default HomePage;
