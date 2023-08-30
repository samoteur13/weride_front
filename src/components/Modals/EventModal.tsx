import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {InputDate} from '../form/input/InputDate';
import Input from '../../components/form/input/Input';

export const EnvetModal = ({trip, setTrip, setSend}: any) => {
  const [modalVisible, setModalVisible] = useState(false);


  const handleTitle = (text: string) => {
    setTrip({...trip, title: text});
  };
  const handleStart_date = (date: Date) => {
    setTrip({...trip, startDate: date});
  };
  const handleEnd_date = (date: Date) => {
    setTrip({...trip, endDate: date});
  };
  const handleType = (text: string) => {
    setTrip({...trip, type: text});
  };
  const handleDescription = (text: string) => {
    setTrip({...trip, description: text});
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Input
              placeholder="Titre"
              onChangeText={handleTitle}
              value={trip.title}
              type="text"
            />
            <InputDate
              title='Départ'
              label={'start'}
              value={trip.startDate}
              setValue={handleStart_date}
            />
            <InputDate
              title='Retour'
              label={'back'}
              value={trip.endDate}
              setValue={handleEnd_date}
            />
            <Input
              placeholder="type"
              onChangeText={handleType}
              value={trip.type}
              type="text"
            />
            <Input
              placeholder="description"
              onChangeText={handleDescription}
              value={trip.description}
              type="text"
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Pressable
                style={[styles.button, styles.buttonSend]}
                onPress={() => setSend(true)}>
                <Text style={{color: 'white'}}>Créer le trip</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: 'white'}}>X</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Aujouter votre trip</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {},
  modalView: {
    top: 100,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'blue',
  },
  buttonClose: {
    marginTop: 5,
    backgroundColor: 'red',
  },
  buttonSend: {
    marginTop: 5,
    backgroundColor: 'blue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
