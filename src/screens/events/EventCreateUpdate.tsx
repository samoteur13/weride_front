import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {LocationInput} from './LocationInput';
import {Text} from 'react-native';
import {CoordinatesInterface} from './CoordinatesInterface';
import {MyMaps} from './MyMaps';

export const EventCreateUpdate = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesInterface[]>([]);
  const [location1, setLocation1] = useState({
    city: '',
    additional_adress: '',
    latidute: 0.0,
    longitude: 0.0,
  });
  const [location2, setLocation2] = useState({
    city: '',
    additional_adress: '',
    latidute: 0.0,
    longitude: 0.0,
  });

  //origin
  const handleLocationSelect1 = (data: any, details: any) => {
    const {description} = data;
    const city = details.vicinity;
    const {lat, lng} = details.geometry.location;
    setLocation1({
      ...location1,
      latidute: lat,
      longitude: lng,
      additional_adress: description,
      city: city,
    });

    const newCoordinate: CoordinatesInterface = {
      latitude: lat, // Remplacez avec la vraie latitude
      longitude: lng, // Remplacez avec la vraie longitude
    };

    const newCoordinates = [...coordinates];
    newCoordinates[0] = newCoordinate;

    setCoordinates(newCoordinates);
  };

  //destination
  const handleLocationSelect2 = (data: any, details: any) => {
    const {description} = data;
    const city = details.vicinity;
    const {lat, lng} = details.geometry.location;
    setLocation2({
      ...location2,
      latidute: lat,
      longitude: lng,
      additional_adress: description,
      city: city,
    });

    const newCoordinate: CoordinatesInterface = {
      latitude: lat, // Remplacez avec la vraie latitude
      longitude: lng, // Remplacez avec la vraie longitude
    };

    const newCoordinates = [...coordinates];
    newCoordinates[1] = newCoordinate;

    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    console.log('la localisation =>', location1, location2);
    console.log('les nouvelle coordoné', coordinates);
  }, [location1, location2, coordinates]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>Flag 1</Text>
        <LocationInput handleLocationSelect={handleLocationSelect1} />
      </View>
      <View
        style={{
          flex: 0.2,
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>Flag 2</Text>
        <LocationInput handleLocationSelect={handleLocationSelect2} />
      </View>
      <View style={{flex: 1}}>
        <MyMaps coordinates={coordinates} />
      </View>
    </View>
  );
};
