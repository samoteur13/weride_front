import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import {useState} from 'react';
import Input from '../../components/input/Input';
import { useFetchData } from '../../hooks/useFetchData';

const SubscribScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    pseudo: '',
  });
  const [send, setSend] = useState(false)

  const postUser = useFetchData({
    url:'api/users',
    method:'POST',
    dataSend: user,
    send: send
  })

  const handleEmail = (text : string) => {
    setUser({...user, email: text});
  };
  const handlePassword = (text: string) => {
    setUser({...user, password: text});
  };
  const handleFirstName = (text: string) => {
    setUser({...user, firstname: text});
  };
  const handleLastName = (text: string) => {
    setUser({...user, lastname: text});
  };
  const handlePseudo = (text: string) => {
    setUser({...user, pseudo: text});
  };

  const Register = async () => {
    setSend(true)
  };

  return (
    <SafeAreaView>
      <View>
        <Input
          placeholder="Email"
          onChangeText={handleEmail}
          value={user.email}
        />
        <Input
          placeholder="password"
          onChangeText={handlePassword}
          value={user.password}
        />
        <Input
          placeholder="firstname"
          onChangeText={handleFirstName}
          value={user.firstname}
        />
        <Input
          placeholder="lastname"
          onChangeText={handleLastName}
          value={user.lastname}
        />
        <Input
          placeholder="pseudo"
          onChangeText={handlePseudo}
          value={user.pseudo}
        />
        <Button title="S'inscrice" onPress={() => Register()} />
      </View>
    </SafeAreaView>
  );
};

export default SubscribScreen;
