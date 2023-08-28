import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';


export const EventCreateUpdate = () => {
  const myPlace = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [64.165329, 48.844287],
        },
      },
    ],
  };
  return (
    <View>
      <Text style={{color: 'red', textAlign: 'center', fontSize: 20}}>
        Ajouter ou modifier une sortie moto en construction
      </Text>
      <MapView
        style={{backgroundColor: 'red', height: 400, width: 400}}
        initialRegion={{
          latitude: 43.317325,
          longitude: 5.397128,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        paddingAdjustmentBehavior={'automatic'}
        userLocationCalloutEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
        moveOnMarkerPress={true}
        showsMyLocationButton
        toolbarEnabled
        onMarkerPress={(e) => console.log('toto')}	
        provider='google'
        
      />
    </View>
  );
};
