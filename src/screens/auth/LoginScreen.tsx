import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/form/input/Input';
import {SafeAreaView, Button} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToken} from '../../redux/slice/tokenSlice/tokenSlice';
import {useFetchData} from '../../hooks/useFetchData';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [login, setUser] = useState({
    email: 'devops@mail.com',
    password: 'Secret_12345',
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
      setSend(false);
    }
  }, [loginUser.isLoading]);

  useEffect(() => {
    if (!send) {
      setSend(false);
    }
  }, [send]);

  const postLogin = async () => {
    setSend(true);
  };

  return (
    <SafeAreaView>
      <Input
        placeholder="Email"
        onChangeText={handleEmail}
        value={login.email}
        type="email"
      />
      <Input
        placeholder="password"
        onChangeText={handlePassword}
        value={login.password}
        type="none"
      />
      <Button title="Connexion" onPress={() => postLogin()} />
    </SafeAreaView>
  );
};

export default LoginScreen;
