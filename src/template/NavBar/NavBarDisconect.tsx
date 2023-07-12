import React from 'react';
import {Text, View, TouchableNativeFeedback, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types/RootType';

export const NavBarDisconect = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate<any>('HomePage');
        }}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../assets/images/logo-weride.webp')}
        />
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text
          style={{margin: 10}}
          onPress={() => {
            navigation.navigate<any>('Login');
          }}>
          Connexion
        </Text>
        <Text
          style={{margin: 10}}
          onPress={() => {
            navigation.navigate<any>('Register');
          }}>
          Inscription
        </Text>
      </View>
    </View>
  );
};
