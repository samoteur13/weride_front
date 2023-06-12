import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SubscribScreen from './screens/auth/SubscribScreen';
import Header from './template/Header';
import HomePage from './screens/home/HomePage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import { Counter } from './screens/counter/Counter';

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
        <Stack.Navigator initialRouteName="counter">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={SubscribScreen} />
          <Stack.Screen name="counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default YourApp;
