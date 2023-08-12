import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamListType = {
  HomePage: undefined;
  Login: undefined;
  Register: undefined;
  profil: undefined;
  events: undefined;
  EventCreateUpdate: undefined;
  BikeCreateUpdate: {bikeId: string};
  Profile: {userId: string};
};

//donne les preperties des routes
export type RootPropsType = NativeStackScreenProps<RootStackParamListType>;

//donne le type pour les navigation disponible pour useNavigate<ProfileScreenNavigationProp>()
export type ScreenNavigationProp = RootPropsType['navigation'];
//donne le type params les navigation disponible de la route actuelle via useRoute<ProfileScreenRouteProp>()
export type ScreenRouteProp = RootPropsType['route'];

//Présise les paramètres de route pour BikeCreateUpdate
export type BikeScreenRouteProp = RouteProp<RootStackParamListType, 'BikeCreateUpdate'>;

// Exemple d'utilisation de  params route

// const Profile = () => {
//   const navigation = useNavigation<ScreenNavigationProp>();
//   const route = useRoute<ScreenRouteProp>();
//   return (
//     <View>
//       <Text>coucou</Text>
//       <Button
//         title="test"
//         onPress={() => {
//           navigation.navigate<any>('Profile', {userId: '15'});
//         }}
//       />
//       <Button
//         title="params"
//         onPress={() => {
//           console.log(route);
//         }}
//       />
//     </View>
//   );
// };
