import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import AppRocket from './AppRocket';
import RocketPost from './RocketPost';
import SubscribScreen from './SubscribScreen';
import Header from './template/Header';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Rocket" onPress={() => navigation.navigate('appRocket')} />
      <Button
        title="rocketPost"
        onPress={() => navigation.navigate('rocketPost')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./logo-weride.webp')}
    />
  );
}
//  source={require('../../public/images/logeWiride.png')}
const Stack = createNativeStackNavigator();

const YourApp = () => {
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref={ref}>
      <Header
        actionConnexion={() => ref.current && ref.current.navigate('Login')}
        actionInscription={() =>
          ref.current && ref.current.navigate('Register')
        }
        actionResetPage={() =>
          ref.current && ref.current.navigate('Home')}
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => <Text>Connexion</Text>,
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="appRocket" component={AppRocket} />
        <Stack.Screen name="rocketPost" component={RocketPost} />
        <Stack.Screen name="Register" component={SubscribScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
