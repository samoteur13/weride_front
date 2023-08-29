import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {KEY_GOOGLE_MAPS} from '../../../config';
import {Marker} from 'react-native-maps';
import {CoordinatesInterface} from './CoordinatesInterface';

interface MyMapsProps {
  coordinates: CoordinatesInterface[];
}
interface ParamsDirectionsInterface {
  origin: {latitude: number; longitude: number};
  apikey: string;
  destination: {latitude: number; longitude: number};
  waypoints: Array<{latitude: number; longitude: number}>;
}

export const MyMaps = ({coordinates}: MyMapsProps) => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 43.3,
    longitude: 5.4,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [paramsDirections, setParamsDirections] =
    useState<ParamsDirectionsInterface>({
      origin: {latitude: 0.0, longitude: 0.0},
      apikey: KEY_GOOGLE_MAPS,
      destination: {latitude: 0.0, longitude: 0.0},
      waypoints: [],
    });

  useEffect(() => {
    if (coordinates) {
      if (coordinates.length === 2) {
        setParamsDirections({
          ...paramsDirections,
          origin: coordinates[0],
          destination: coordinates[1],
        });
      }
    }
  }, [coordinates]);

  const [toto, setToto] = useState({});



  return (
    <MapView
      style={{backgroundColor: 'red', height: 400, width: '100%'}}
      initialRegion={initialRegion}>
      {coordinates.length >= 1 &&
        coordinates.map((coordinate: any, index: any) => (
          <Marker key={index} coordinate={coordinates[index]} />
        ))}
      {coordinates.length >= 2 && (
        <MapViewDirections
          {...paramsDirections}
          language="fr"
          mode="DRIVING"
          strokeWidth={4}
          strokeColor="red"
          onReady={result => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);
          }}
          onError={errorMessage => {
            console.log(errorMessage);
          }}
        />
      )}
    </MapView>
  );
};
