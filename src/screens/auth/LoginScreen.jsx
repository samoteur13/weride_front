import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

const LoginScreen = ({navigation}) => {
  const [login, setUser] = React.useState({
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
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="data test" onPress={() => postLogin()} />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={handleEmail}
        value={login.email}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        onChangeText={handlePassword}
        value={login.password}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
