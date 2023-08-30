import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {LocationInput} from './LocationInput';
import {CoordinatesInterface} from './CoordinatesInterface';
import {MyMaps} from './MyMaps';
import {EnvetModal} from '../../components/Modals/EventModal';
import {useFetchData} from '../../hooks/useFetchData';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types/RootType';
import moment from 'moment';

export const EventCreateUpdate = () => {
  const tokenStore = useSelector((state: any) => state.token.value);
  const userStore = useSelector((state: any) => state.profil.value);
  const navigation = useNavigation<ScreenNavigationProp>();
  const userId = `/api/users/${userStore.id}`;
  const [coordinates, setCoordinates] = useState<CoordinatesInterface[]>([]);
  const [send, setSend] = useState(false);
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

  const [trip, setTrip] = useState({
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    type: '',
    description: '',
    user: userId,
  });

  //transform the date here so as not to change the date format of datePicker
  const copyTrip_transformDate = {
    ...trip,
    startDate: moment(trip.startDate).format('YYYY-MM-DD HH:mm:ss'),
    endDate: moment(trip.endDate).format('YYYY-MM-DD HH:mm:ss'),
  };

  const [httpParams, setParams] = useState({
    url: 'api/trips',
    method: 'POST',
    send: false,
  });

  const trip_create_update = useFetchData({
    url: httpParams.url,
    method: httpParams.method,
    token: tokenStore,
    dataSend: copyTrip_transformDate,
    send: send,
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

  useEffect(() => {
    if (send) {
      console.log(copyTrip_transformDate);
      setSend(!send);
    }
  }, [send]);

  useEffect(() => {
    if (trip_create_update.isLoading) {
      navigation.navigate('profil');
    }
  }, [trip_create_update.isLoading]);

  return (
    <>
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
      <EnvetModal trip={trip} setTrip={setTrip} setSend={setSend} />
    </>
  );
};
