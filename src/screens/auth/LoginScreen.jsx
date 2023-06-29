import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/input/Input';
import {SafeAreaView, Button} from 'react-native';
import {useEffect, useState} from 'react';
import {urlApi} from '../../../Constants';
import {useDispatch} from 'react-redux';
import {addToken} from '../../redux/slice/tokenSlice';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [login, setUser] = useState({
    email: 'paul.roger@louis.com',
    password: 'paul.roger@louis.com',
  });
  const [token, setToken] = useState('');

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

  useEffect(() => {
    if (token) {
      dispatch(addToken(token));
    }
  }, [token]);

  const postLogin = async () => {
    try {
      const response = await fetch(myApi, {
        method: 'POST',
        headers: config,
        body: JSON.stringify(login),
      });
      const data = await response.json();
      setToken(data.token);
      await AsyncStorage.setItem('token', data.token);
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
