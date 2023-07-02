import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props: any) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      onChangeText={props.onChangeText}
      value={props.value}
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
