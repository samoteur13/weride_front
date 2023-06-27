import {useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const useConnect = async () => {
  const navigation = useNavigation(); // Récupérez l'objet de navigation

  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      navigation.navigate('profile'); 
    } else {
      navigation.navigate('Login'); 
    }
  } catch (error) {
    console.log('Erreur lors de la récupération des données:', error);
  }
      
    
}