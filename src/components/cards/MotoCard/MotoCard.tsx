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
                    uri: bike.img_bike,
                  }}
                />
                <Text>
                  {bike.name} {bike.power}
                </Text>
              </View>
              <View style={cardStyle.button_between}>
                <Button
                  title="modifier"
                  onPress={() => console.log('modifier moto')}
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
