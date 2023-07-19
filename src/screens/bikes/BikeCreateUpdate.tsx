import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {BikeScreenRouteProp} from '../../types/RootType';
import {Card} from '../../components/cards/Card/Card';
import Input from '../../components/form/input/Input';
import { useFetchData } from '../../hooks/useFetchData';

export const BikeCreateUpdate = () => {
  const {params} = useRoute<BikeScreenRouteProp>();
  const {bikeId} = params;
  const [bike, setBike] = useState({
    idUser: 21,
    name: '',
    power: 0,
    imgBike:
      'https://images.caradisiac.com/images/8/6/5/5/198655/S1-moto-electrique-damon-ca-cartonne-731272.jpg',
  });

  const handleName = (text: string) => {
    setBike({...bike, name: text});
  };
  const handlePower = (text: number) => {
    setBike({...bike, power: text});
  };
  const handleUrl = (text: string) => {
    setBike({...bike, imgBike: text});
  };

  const bike_create_update = useFetchData({
    url:'api/bikes',
    method: 'POST',
    dataSend: bike,
    send: false
  })

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Button
        title="test data"
        onPress={() => {
          console.log(bike);
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
              value={bike.power}
              onChangeText={handlePower}
              type="numeric"
            />
            <Input
              placeholder="Lien vers votre image"
              value={bike.imgBike}
              onChangeText={handleUrl}
              type="none"
            />
          </>
        }
      />
    </SafeAreaView>
  );
};
