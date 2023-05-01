import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {useState} from 'react';

const SubscribScreen = ({navigation}) => {
    
  const [data, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    pseudo: '',
  });

  const config = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  handleEmail = text => {
    setUser({...data, email: text});
  };
  handlePassword = text => {
    setUser({...data, password: text});
  };
  handleFirstName = text => {
    setUser({...data, firstname: text});
  };
  handleLastName = text => {
    setUser({...data, lastname: text});
  };
  handlePseudo = text => {
    setUser({...data, pseudo: text});
  };

  const myApi = 'http://172.18.183.61:8000/api/users';


  const Register = async () => {
    console.log('je test');
    console.log(data);
    await fetch(myApi, {
      method: 'POST',
      headers: config,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error.toJSON()));
  };

  return (
    <SafeAreaView>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="data test" onPress={() => Register()} />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={handleEmail}
        value={data.email}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        onChangeText={handlePassword}
        value={data.password}
      />
       <TextInput
        placeholder="firstname"
        style={styles.input}
        onChangeText={handleFirstName}
        value={data.firstname}
      />
       <TextInput
        placeholder="lastname"
        style={styles.input}
        onChangeText={handleLastName}
        value={data.lastname}
      />
       <TextInput
        placeholder="pseudo"
        style={styles.input}
        onChangeText={handlePseudo}
        value={data.pseudo}
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

export default SubscribScreen;
