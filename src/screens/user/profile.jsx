import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { useSelector} from 'react-redux';

export const ProfileUser = ({navigation}) => {

  const tokenStore = useSelector((state) => state.token.value);
  

  return (
    <SafeAreaView>
        <Text>Page de profile utilisateur à remplire </Text>
    </SafeAreaView>
  );
};

