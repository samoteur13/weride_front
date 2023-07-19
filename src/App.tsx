import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SubscribScreen from './screens/auth/SubscribScreen';
import Header from './template/Header';
import HomePage from './screens/home/HomePage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {ProfileUser} from './screens/user/profile';
import {RootStackParamListType} from './types/RootType';
import {BikeCreateUpdate} from './screens/bikes/BikeCreateUpdate';

const RootStack = createNativeStackNavigator<RootStackParamListType>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomePage">
          <RootStack.Screen name="HomePage" component={HomePage} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={SubscribScreen} />
          <RootStack.Screen name="profil" component={ProfileUser} />
          <RootStack.Screen
            name="BikeCreateUpdate"
            component={BikeCreateUpdate}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
