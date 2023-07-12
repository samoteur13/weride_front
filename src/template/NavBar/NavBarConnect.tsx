import React from 'react';
import {Text, View, TouchableNativeFeedback, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetToken} from '../../redux/slice/tokenSlice/tokenSlice';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types/RootType';

export const NavBarConnect = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenNavigationProp>();
  //Deconnexion
  const deleteToken = async (event: any) => {
    try {
      const value = await AsyncStorage.removeItem('token');
      if (value !== null) {
        dispatch(resetToken());
      }
    } catch (error) {
      console.log('Erreur lors de la suppressions des données:', error);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate<any>('profil');
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
        <Text style={{margin: 10}} onPress={deleteToken}>
          Deconnexion
        </Text>
      </View>
    </View>
  );
};
