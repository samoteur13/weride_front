import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, resetCount } from '../../redux/slice/counterSlice';
import { Button, Text, View } from 'react-native';


export function Counter() {
  const count = useSelector(state => state.counter.toto);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}>
        </Button>
        <Text>{count}</Text>
        <Button
          title="Decrement value"
          onPress={() => dispatch(decrement())}>
        </Button>
        <Button
          title="Reset count"
          onPress={() => dispatch(resetCount())}>
        </Button>
      </View>
    </View>
  );
}
