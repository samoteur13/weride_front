import React from 'react';
import {Text, View, TouchableNativeFeedback, Image} from 'react-native';

export const NavBarDisconect = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <TouchableNativeFeedback onPress={props.actionResetPage}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../images/logo-weride.webp')}
        />
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{margin: 10}} onPress={props.actionConnexion}>
          Connexion
        </Text>
        <Text style={{margin: 10}} onPress={props.actionInscription}>
          Inscription
        </Text>
      </View>
    </View>
  );
};
