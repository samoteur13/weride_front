import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {MotoCard} from '../../components/cards/MotoCard/MotoCard';
import {UserInterface} from '../../interfaces/user/userInterface';
import {useFetchData} from '../../hooks/useFetchData';
import {ContactBody} from '../../components/cards/bodyCards/ContactBody/ContactBody';
import {cardStyle} from '../../components/cards/cardStyle';
import {Card} from '../../components/cards/Card/Card';

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
      <Card title="Contact" content={<ContactBody userInfo={userData} />} />
      <Card title="Sortie" content={<Text>a venir</Text>} />
      <Card title="Je participe" content={<Text>a venir</Text>} />
      <Card title="Ma galerie" content={<Text>a venir</Text>} />
    </ScrollView>
  );
};
