import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useEffect, useState} from 'react';
import Input from '../../components/Input';

const LoginScreen = ({navigation}) => {

  const [login, setUser] = useState({
    email: 'Gilles15@Georges.fr',
    password: 'Gilles15@Georges.fr',
  });

  const config = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  handleEmail = text => {
    setUser({...login, email: text});
  };
  handlePassword = text => {
    setUser({...login, password: text});
  };

  const myApi = 'http://192.168.63.180:8000/auth';

  useEffect(() => {}, []);

  const postLogin = async () => {
    console.log('je test');

    await fetch(myApi, {
      method: 'POST',
      headers: config,
      body: JSON.stringify(login),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error.toJSON()));
  };

  return (
    <SafeAreaView>
      <Input
        placeholder="Email"
        onChangeText={handleEmail}
        value={login.email}
      />
      <Input
        placeholder="password"
        onChangeText={handlePassword}
        value={login.password}
      />
      <Button title="Connexion" onPress={() => postLogin()} />
    </SafeAreaView>

  );
};

export default LoginScreen;
