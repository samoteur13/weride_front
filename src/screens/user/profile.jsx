import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  NativeModules,
} from 'react-native';
import {useSelector} from 'react-redux';
import {urlApi} from '../../utils/Constants';
import {MotoCard} from '../../components/cards/MotoCard';

export const ProfileUser = ({navigation}) => {
  const tokenStore = useSelector(state => state.token.value);
  const [userData, setUserData] = useState({});
  // NativeModules.DevSettings.reload();

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
      <Button
        title="Voir la data"
        onPress={() => console.log(userData.bikes)}
      />
      <MotoCard bikes={userData.bikes} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    margin: 0.9,
    flex: 0.3,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
