import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {MyMaps} from './MyMaps';
import {LocationInput} from './LocationInput';

export const EventCreateUpdate = () => {
  const [location, setLocation] = useState({
    city: '',
    additional_adress: '',
    latidute: 0.0,
    longitude: 0.0,
  });

  const handleLocationSelect = (data: any, details: any) => {
    // console.log('Selected location:', data, details);
    console.log(data, details);
    const {description} = data;
    const city = details.vicinity;
    const {lat, lng} = details.geometry.location;
    setLocation({
      ...location,
      latidute: lat,
      longitude: lng,
      additional_adress: description,
      city: city,
    });
  };

  useEffect(() => {
    console.log('la localisation =>', location);
  }, [location]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1, zIndex: 99999}}>
        <LocationInput handleLocationSelect={handleLocationSelect} />
      </View>
      <View style={{flex: 1}}>
        <MyMaps />
      </View>
    </View>
  );
};
