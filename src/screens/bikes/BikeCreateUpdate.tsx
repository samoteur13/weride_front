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
  const userId = `/api/users/${userStore.id}`;
  const [send, setSend] = useState(false);
  const {bikeId} = params;
  const [bike, setBike] = useState({
    name: 'ma moto de test',
    power: 2000,
    img_bike:
      'https://images.caradisiac.com/images/8/6/5/5/198655/S1-moto-electrique-damon-ca-cartonne-731272.jpg',
    user: userId,
  });

  const handleName = (text: string) => {
    setBike({...bike, name: text});
  };
  const handlePower = (text: number) => {
    setBike({...bike, power: text});
  };
  const handleUrl = (text: string) => {
    setBike({...bike, img_bike: text});
  };

  const bike_create_update = useFetchData({
    url: 'api/bikes',
    method: 'POST',
    token: tokenStore,
    dataSend: bike,
    send: send,
  });

  useEffect(() => {
    if (bike_create_update.isLoading) {
      navigation.navigate('profil');
    }
  }, [bike_create_update.isLoading]);

  useEffect(() => {
    send && setSend(false);
  }, [send]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Button
        title="testData"
        onPress={() => {
          console.log('toto');
        }}
      />
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
