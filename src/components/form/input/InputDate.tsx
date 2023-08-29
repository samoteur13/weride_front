import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import { InputDateInterface } from '../../../interfaces/form/InputDateInterface';

import DatePicker from 'react-native-date-picker';
export const InputDate = ({value, setValue, label}: InputDateInterface) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Text style={styleDate.dateInputForm} onPress={() => setOpen(true)}>
        {value
          ? `${label} :` + value.toLocaleDateString()
          : `${label} : jours/mois/années`}
      </Text>
      <DatePicker
        modal
        open={open}
        date={value}
        confirmText={'confirmer'}
        cancelText={'annuler'}
        onConfirm={date => {
          setOpen(false);
          setValue(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styleDate = StyleSheet.create({
  dateInputForm: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
