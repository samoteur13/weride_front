import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {KEY_GOOGLE_MAPS} from '../../../config';
interface LocationInputProps {
  handleLocationSelect: (data: any, details: any) => void;
}
export const LocationInput: React.FC<LocationInputProps> = ({
  handleLocationSelect,
}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Lieux"
      fetchDetails
      styles={{
        listView: {
          position: 'absolute',
          zIndex: 9999,
          top: 40,
        },
      }}
      minLength={4}
      listViewDisplayed={false}
      onPress={(data: any, details: any) => {
        handleLocationSelect(data, details);
      }}
      query={{
        key: KEY_GOOGLE_MAPS,
        language: 'fr',
        components: 'country:fr',
      }}
    />
  );
};
