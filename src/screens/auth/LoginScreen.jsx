import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {useEffect, useState} from 'react';
import Input from '../../components/Input';
import {urlApi} from '../../../Constants';

const LoginScreen = ({navigation}) => {
  const [login, setUser] = useState({
    email: 'leon99@roux.com',
    password: 'leon99@roux.com',
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

  const myApi = `${urlApi}auth`;

  useEffect(() => {}, []);

  const postLogin = async () => {
    try {
      const response = await fetch(myApi, {
        method: 'POST',
        headers: config,
        body: JSON.stringify(login),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
