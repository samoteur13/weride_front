import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/input/Input';
import {SafeAreaView, Button} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToken} from '../../redux/slice/tokenSlice';
import {useFetchData} from '../../hooks/useFetchData';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [login, setUser] = useState({
    email: 'leon99@roux.com',
    password: 'leon99@roux.com',
  });
  const [send, setSend] = useState(false);
  const loginUser = useFetchData({
    url: 'auth',
    method: 'POST',
    dataSend: login,
    send: send,
  });

  const handleEmail = (text: string) => {
    setUser({...login, email: text});
  };
  const handlePassword = (text: string) => {
    setUser({...login, password: text});
  };

  useEffect(() => {
    if (loginUser.isLoading) {
      dispatch(addToken(loginUser.apiData.token));
      AsyncStorage.setItem('token', loginUser.apiData.token);
    }
  }, [loginUser.isLoading]);

  const postLogin = async () => {
    setSend(true);
  };

  useEffect(() => {
    if (send === true) {
      setSend(false);
    }
  }, [send]);

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
