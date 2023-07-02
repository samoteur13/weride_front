import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {urlApi} from '../../utils/Constants';
import {MotoCard} from '../../components/cards/MotoCard';
import {UserInterface} from '../../interfaces/user/userInterface';

export const ProfileUser = () => {
  const tokenStore = useSelector((state: any) => state.token.value);
  const [userData, setUserData] = useState<UserInterface>({
    avatar: null,
    bikes: [],
    email: '',
    firstname: '',
    lastname: '',
    pictures: [],
    posts: [],
    pseudo: '',
    rider_trips: [],
    trips: [],
  });

  const config = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenStore}`,
  };
  const myApi = `${urlApi}api/profil`;
  const getProfil = async () => {
    try {
      const response = await fetch(myApi, {
        method: 'GET',
        headers: config,
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfil();
  }, [tokenStore]);

  return (
    <ScrollView>
      <Button title="Voir la data" onPress={() => console.log(userData)} />
      <MotoCard bikes={userData.bikes} />
    </ScrollView>
  );
};
