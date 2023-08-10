import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {MotoCard} from '../../components/cards/MotoCard/MotoCard';
import {UserInterface} from '../../interfaces/user/userInterface';
import {useFetchData} from '../../hooks/useFetchData';
import {ContactBody} from '../../components/cards/bodyCards/ContactBody/ContactBody';
import {Card} from '../../components/cards/Card/Card';
import {useFocusEffect} from '@react-navigation/native';

export const ProfileUser = () => {
  const profilStore = useSelector((state: any) => state.profil.value);
  const tokenStore = useSelector((state: any) => state.token.value);
  const [userData, setUserData] = useState<UserInterface>(Object);
  const [send, setSend] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setSend(true);
    }, []),
  );

  const [bikeDeleteParams, setBikeDeleteParams] = useState({
    sendDeleteBike: false,
    id: '',
  });

  const getUser = useFetchData({
    url: 'api/me/details',
    method: 'GET',
    token: tokenStore,
    send: send,
  });

  useEffect(() => {
    if (getUser.isLoading) {
      setUserData(getUser.apiData);
      setSend(false);
    }
  }, [getUser]);

  const deleteBike = useFetchData({
    url: `api/bikes/${bikeDeleteParams.id}`,
    method: 'DELETE',
    token: tokenStore,
    send: bikeDeleteParams.sendDeleteBike,
  });

  const submitDeleteBike = (id: string) => {
    setBikeDeleteParams({...bikeDeleteParams, id: id, sendDeleteBike: true});
  };

  useEffect(() => {
    if (deleteBike.isLoading === true) {
      setBikeDeleteParams({...bikeDeleteParams, id: '', sendDeleteBike: false});
      setSend(true);
    }
  }, [deleteBike.isLoading]);

  return (
    <ScrollView>
      <Button
        title="Voir la data"
        onPress={() => console.log(getUser.apiData)}
      />
      <Button
        title="Voir le profilStore"
        onPress={() => console.log(profilStore)}
      />

      <MotoCard bikes={userData.bikes} deleteBike={submitDeleteBike} />
      <Card title="Contact" content={<ContactBody userInfo={userData} />} />
      <Card title="Sortie" content={<Text>a venir</Text>} />
      <Card title="Je participe" content={<Text>a venir</Text>} />
      <Card title="Ma galerie" content={<Text>a venir</Text>} />
    </ScrollView>
  );
};
