import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {InputDateInterface} from '../../../interfaces/form/InputDateInterface';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';


export const InputDate = ({value, setValue, title, label}: InputDateInterface) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Text style={styleDate.dateInputForm} onPress={() => setOpen(true)}>
        {value
          ? `${label} :` + moment(value).format("YYYY-MM-DD HH:mm:ss")
          : `${label} : jours/mois/années heure`}
      </Text>
      <DatePicker
        title={title}
        locale="fr"
        modal
        mode="datetime"
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
