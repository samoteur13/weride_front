import React, {useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {InputInterface} from '../../../interfaces/form/InputInterface';

const Input = ({placeholder, onChangeText, value, type}: InputInterface) => {
  useEffect(() => {
    console.log(type);
  }, []);

  const stringType = 'none'
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      inputMode={type ? type : stringType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Input;
