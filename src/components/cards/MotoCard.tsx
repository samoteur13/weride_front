import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import styleCards from './styleCards';
import {bikeInterface} from '../../interfaces/bikeInterface/bikeInterface';

export const MotoCard = ({bikes}: {bikes: bikeInterface[]}) => {
  console.log(bikes);
  return (
    <View style={styleCards.middle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: 10,
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Moto </Text>
        <Button title="ajouter" onPress={() => console.log('ajout de moto')} />
        <Button title="modifier" onPress={() => console.log('modifier moto')} />
      </View>
      {bikes &&
        bikes.map((bike, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 200, height: 100}}
                source={{
                  uri: bike.img_bike,
                }}
              />
              <Text>
                {bike.name} {bike.power}
              </Text>
            </View>
          );
        })}
    </View>
  );
};
