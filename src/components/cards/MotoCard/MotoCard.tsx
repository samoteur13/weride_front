import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import {cardStyle} from '../cardStyle';
import {bikeInterface} from '../../../interfaces/bike/bikeInterface';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../types/RootType';

export const MotoCard = ({
  bikes,
  deleteBike,
}: {
  bikes: bikeInterface[];
  deleteBike: any;
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View style={cardStyle.middle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: 10,
          borderBottomWidth: 0.2,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Moto</Text>
        <Button
          title="ajouter"
          color="green"
          onPress={() =>
            navigation.navigate<any>('BikeCreateUpdate', {bikeId: ''})
          }
        />
      </View>
      {bikes &&
        bikes.map((bike, index) => {
          return (
            <View key={index} style={cardStyle.middle}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                  marginTop: 2,
                }}>
                <Image
                  style={{
                    width: 200,
                    height: 100,
                    borderRadius: 5,
                    marginEnd: 5,
                  }}
                  source={{
                    uri: bike.img_bike ?  bike.img_bike : 'https://cdn4.louis.de/r/4f02f576d96ee911b5de0d1f9d4f07b747efb28f/de-bspecial-ktm-125-duke-img-00-1200x752.jpg',
                  }}
                />
                <Text>
                  {bike.name} {bike.power}
                </Text>
              </View>
              <View style={cardStyle.button_between}>
                <Button
                  title="modifier"
                  onPress={() =>
                    navigation.navigate<any>('BikeCreateUpdate', {
                      bikeId: bike.id,
                    })
                  }
                />
                <Button
                  title="suprrimer"
                  color="red"
                  onPress={() => deleteBike(bike.id)}
                />
              </View>
            </View>
          );
        })}
    </View>
  );
};
