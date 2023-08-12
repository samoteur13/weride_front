import React from 'react';
import {Text, View, TouchableNativeFeedback, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetToken} from '../../redux/slice/tokenSlice/tokenSlice';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types/RootType';
import {useSelector} from 'react-redux';

export const NavBarConnect = () => {
  const dispatch = useDispatch();
  const profilStore = useSelector((state: any) => state.profil.value);
  const navigation = useNavigation<ScreenNavigationProp>();
  //Deconnexion
  const deleteToken = async (event: any) => {
    try {
      const value = await AsyncStorage.removeItem('token');
      if (value !== null) {
        dispatch(resetToken());
      }
    } catch (error) {
      console.log('Erreur lors de la suppressions des données:', error);
    }
  };

  return (
    <>
      {/* part 1 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: '#3ecf67',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate<any>('profil');
            }}>
            <Image
              style={{width: 70, height: 70, borderRadius: 100}}
              source={require('../../assets/images/default.jpg')}
            />
          </TouchableNativeFeedback>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}>
              {profilStore.firstname + ' ' + profilStore.lastname}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}>
              kawazaki 500
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              backgroundColor: '#DDDDDD',
              padding: 4,
              borderRadius: 5,
              fontSize: 10,
            }}
            onPress={deleteToken}>
            Deconnexion
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              backgroundColor: '#DDDDDD',
              padding: 4,
              borderRadius: 5,
              fontSize: 10,
            }}
            onPress={() => {
              navigation.navigate<any>('EventCreateUpdate');
            }}>
            Organiser une sortie
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 2,
              backgroundColor: '#DDDDDD',
              padding: 4,
              borderRadius: 5,
              fontSize: 10,
            }}
            onPress={deleteToken}>
            Modifier le profil
          </Text>
        </View>
      </View>

      {/* part 2 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginRight: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#0075FF',
            borderBottomWidth: 2,
          }}>
          <Text
            style={{color: '#0075FF', margin: 10}}
            onPress={() => {
              navigation.navigate<any>('profil');
            }}>
            Mon profil
          </Text>
        </View>
        <View
          style={{
            marginLeft: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#0075FF',
            borderBottomWidth: 2,
          }}>
          <Text
            style={{color: '#0075FF', margin: 10}}
            onPress={() => {
              navigation.navigate<any>('events');
            }}>
            Sorties moto
          </Text>
        </View>
      </View>
    </>
  );
};
