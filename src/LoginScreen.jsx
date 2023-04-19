import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [response, setResponse] = React.useState([]);

  const [login, setUser] = React.useState({
    email: '',
    password: '',
  });

  handleEmail = text => {
    setUser({...login, email: text});
  };
  handlePassword = text => {
    setUser({ ...login, password: text});
  };

  const baseUrl = 'https://reqres.in';

  const dataGet = () => {
    // Invoking get method to perform a GET request
    axios.get(`${baseUrl}/api/users/${text}`).then(response => {
      setResponse(response.data);
    });

    console.log(`${baseUrl}/api/users/${text}`);
  };

  const loginUser = () => {
    
  }

  return (
    <SafeAreaView>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="la data" onPress={() => console.log('test')} />
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
