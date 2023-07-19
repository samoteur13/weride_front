import React, {useEffect} from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import {useState} from 'react';
import Input from '../../components/form/input/Input';
import {useFetchData} from '../../hooks/useFetchData';

const SubscribScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    pseudo: '',
  });
  const [send, setSend] = useState(false);

  const postUser = useFetchData({
    url: 'api/users',
    method: 'POST',
    dataSend: user,
    send: send,
  });

  const handleEmail = (text: string) => {
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
    setSend(true);
  };

  useEffect(() => {
    if (send === true) {
      setSend(false);
    }
  }, [send]);

  return (
    <SafeAreaView>
      <View>
        <Input
          placeholder="Email"
          onChangeText={handleEmail}
          value={user.email}
          type="email"
        />
        <Input
          placeholder="password"
          onChangeText={handlePassword}
          value={user.password}
          type="none"
        />
        <Input
          placeholder="firstname"
          onChangeText={handleFirstName}
          value={user.firstname}
          type="none"
        />
        <Input
          placeholder="lastname"
          onChangeText={handleLastName}
          value={user.lastname}
          type="none"
        />
        <Input
          placeholder="pseudo"
          onChangeText={handlePseudo}
          value={user.pseudo}
          type="none"
        />
        <Button title="S'inscrice" onPress={() => Register()} />
      </View>
    </SafeAreaView>
  );
};

export default SubscribScreen;
