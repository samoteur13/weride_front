import {StyleSheet} from 'react-native';

export const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
