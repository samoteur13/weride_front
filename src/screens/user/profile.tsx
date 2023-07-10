import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {MotoCard} from '../../components/cards/MotoCard/MotoCard';
import {UserInterface} from '../../interfaces/user/userInterface';
import {useFetchData} from '../../hooks/useFetchData';
import {ContactBody} from '../../components/cards/bodyCards/ContactBody/ContactBody';
import {Card} from '../../components/cards/Card/Card';

export const ProfileUser = () => {
  const tokenStore = useSelector((state: any) => state.token.value);
  const [userData, setUserData] = useState<UserInterface>(Object);
  const [send, setSend] = useState(true);
  const [bikeDeleteParams, setBikeDeleteParams] = useState({
    send: false,
    id: '',
  });

  const getUser = useFetchData({
    url: 'api/profil',
    method: 'GET',
    token: tokenStore,
    send: send,
  });

  useEffect(() => {
    if (getUser.isLoading) {
      setTimeout(() => {
        setUserData(getUser.apiData);
        setSend(false);
      }, 2000);
    }
  }, [getUser]);

  const deleteBike = useFetchData({
    url: `api/bikes/${bikeDeleteParams.id}`,
    method: 'DELETE',
    token: tokenStore,
    send: bikeDeleteParams.send,
  });

  const submitDeleteBike = (id: string) => {
    setBikeDeleteParams({...bikeDeleteParams, id: id, send: true});
    setSend(true);
  };

  useEffect(() => {
    if (bikeDeleteParams.send) {
      setBikeDeleteParams({...bikeDeleteParams, send: false});
    }
  }, [deleteBike.isLoading]);

  return (
    <ScrollView>
      <Button
        title="Voir la data"
        onPress={() => console.log(getUser.apiData)}
      />
      <MotoCard bikes={userData.bikes} deleteBike={submitDeleteBike} />
      <Card title="Contact" content={<ContactBody userInfo={userData} />} />
      <Card title="Sortie" content={<Text>a venir</Text>} />
      <Card title="Je participe" content={<Text>a venir</Text>} />
      <Card title="Ma galerie" content={<Text>a venir</Text>} />
    </ScrollView>
  );
};
