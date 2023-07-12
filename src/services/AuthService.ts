import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addToken} from '../redux/slice/tokenSlice/tokenSlice';
import {useDispatch, useSelector} from 'react-redux';
import { ScreenNavigationProp } from '../types/RootType';

export const AuthService = async () => {
  const tokenStore = useSelector((state: any) => state.token.value);
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenNavigationProp>();

  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      if (!tokenStore) {
        dispatch(addToken(token));
      }
      navigation.navigate('profil');
    } else {
      navigation.navigate('Login');
    }
  } catch (error) {
    console.log('Erreur lors de la récupération des données:', error);
  }
};
