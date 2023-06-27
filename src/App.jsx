import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SubscribScreen from './screens/auth/SubscribScreen';
import Header from './template/Header';
import HomePage from './screens/home/HomePage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import { ProfileUser } from './screens/user/profile';

const Stack = createNativeStackNavigator();

const image = {uri: 'https://reactjs.org/logo-og.png'};

const YourApp = () => {
  const ref = React.useRef(null);
  return (
    <Provider store={store}>
      <NavigationContainer ref={ref}>
        <Header
          actionConnexion={() => ref.current && ref.current.navigate('Login')}
          actionInscription={() =>
            ref.current && ref.current.navigate('Register')
          }
          actionResetPage={() =>
            ref.current && ref.current.navigate('HomePage')
          }
        />
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={SubscribScreen} />
          <Stack.Screen name="profile" component={ProfileUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default YourApp;
