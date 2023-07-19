import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {BikeScreenRouteProp} from '../../types/RootType';
import {Card} from '../../components/cards/Card/Card';
import Input from '../../components/form/input/Input';
import {useFetchData} from '../../hooks/useFetchData';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types/RootType';

export const BikeCreateUpdate = () => {
  const {params} = useRoute<BikeScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const userStore = useSelector((state: any) => state.profil.value);
  const tokenStore = useSelector((state: any) => state.token.value);
  const {bikeId} = params;
  const userId = `/api/users/${userStore.id}`;
  const [send, setSend] = useState(false);
  const [httpParams, setParams] = useState({
    url: 'api/bikes',
    method: 'POST',
    send: false,
  });
  const [bike, setBike] = useState({
    name: 'ma moto de test',
    power: 2000,
    img_bike:
      'https://cdn4.louis.de/r/4f02f576d96ee911b5de0d1f9d4f07b747efb28f/de-bspecial-ktm-125-duke-img-00-1200x752.jpg',
    user: userId,
  });

  const getBike = useFetchData({
    url: `api/bikes/${bikeId}`,
    method: 'GET',
    token: tokenStore,
    send: httpParams.send,
  });

  const bike_create_update = useFetchData({
    url: httpParams.url,
    method: httpParams.method,
    token: tokenStore,
    dataSend: bike,
    send: send,
  });

  useEffect(() => {
    if (bikeId) {
      setParams({
        ...httpParams,
        url: `api/bikes/${bikeId}`,
        method: 'PUT',
        send: true,
      });
    }
    if (getBike.isLoading) {
      setBike({...getBike.apiData});
    }
  }, [bikeId, getBike.isLoading]);

  useEffect(() => {
    if (bike_create_update.isLoading) {
      navigation.navigate('profil');
    }
  }, [bike_create_update.isLoading]);

  const handleName = (text: string) => {
    setBike({...bike, name: text});
  };
  const handlePower = (text: number) => {
    setBike({...bike, power: text});
  };
  const handleUrl = (text: string) => {
    setBike({...bike, img_bike: text});
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Card
        title="Ajouter votre moto"
        content={
          <>
            <Input
              placeholder="Nom"
              value={bike.name}
              onChangeText={handleName}
              type="none"
            />
            <Input
              placeholder="Puissance"
              value={bike.power.toString()}
              onChangeText={handlePower}
              type="numeric"
            />
            <Input
              placeholder="Lien vers votre image"
              value={bike.img_bike}
              onChangeText={handleUrl}
              type="url"
            />
            <Button
              title="créer"
              onPress={() => {
                setSend(true);
              }}
            />
          </>
        }
      />
    </SafeAreaView>
  );
};
