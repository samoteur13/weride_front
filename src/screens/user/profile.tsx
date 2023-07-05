import React, {useEffect, useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {MotoCard} from '../../components/cards/MotoCard';
import {UserInterface} from '../../interfaces/user/userInterface';
import {useFetchData} from '../../hooks/useFetchData';

export const ProfileUser = () => {
  const tokenStore = useSelector((state: any) => state.token.value);
  const [userData, setUserData] = useState<UserInterface>(Object);

  const getUser = useFetchData({
    url: 'api/profil',
    method: 'GET',
    token: tokenStore,
    send: true,
  });

  useEffect(() => {
    if (getUser.isLoading) {
      setUserData(getUser.apiData);
    }
  }, [getUser]);

  return (
    <ScrollView>
      <Button title="Voir la data" onPress={() => console.log(userData)} />
      <MotoCard bikes={userData.bikes} />
    </ScrollView>
  );
};
