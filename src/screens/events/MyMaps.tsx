import React, {useEffect} from 'react';
import MapView from 'react-native-maps';

export const MyMaps = () => {
  return (
    <MapView
      style={{backgroundColor: 'red', height: 400, width: 400}}
      initialRegion={{
        latitude: 43.3,
        longitude: 5.4,
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
      onMarkerPress={e => console.log('toto')}
      provider="google"
    />
  );
};
