import React from 'react';
import {Text, View} from 'react-native';
import {cardStyle} from '../../cardStyle';
import {UserInterface} from '../../../../interfaces/user/userInterface';

export const ContactBody = ({userInfo}: {userInfo: UserInterface}) => {
  return (
    <View style={{display: 'flex', alignItems: 'center', padding: 10, marginBottom: 5, marginTop: 5}}>
      <Text style={{color: 'black'}}>
        {userInfo.firstname} {userInfo.lastname}
      </Text>
      <Text style={{color: 'black'}}>{userInfo.email}</Text>
      <Text style={{color: 'black'}}>{userInfo.pseudo}</Text>
    </View>
  );
};
