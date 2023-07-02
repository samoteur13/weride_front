import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import {useState} from 'react';
import Input from '../../components/input/Input';
import { urlApi } from '../../utils/Constants';

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

  const myApi = `${urlApi}api/users`;

  const Register = async () => {
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
      <View>
        <Input
          placeholder="Email"
          onChangeText={handleEmail}
          value={data.email}
        />
        <Input
          placeholder="password"
          onChangeText={handlePassword}
          value={data.password}
        />
        <Input
          placeholder="firstname"
          onChangeText={handleFirstName}
          value={data.firstname}
        />
        <Input
          placeholder="lastname"
          onChangeText={handleLastName}
          value={data.lastname}
        />
        <Input
          placeholder="pseudo"
          onChangeText={handlePseudo}
          value={data.pseudo}
        />
        <Button title="S'inscrice" onPress={() => Register()} />
      </View>
    </SafeAreaView>
  );
};

export default SubscribScreen;
