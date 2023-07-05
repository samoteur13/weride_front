import React from 'react';
import {Text, View} from 'react-native';
import {cardStyle} from '../cardStyle';

export const Card = ({
  content,
  title,
}: {
  content: React.ReactElement | React.ReactNode;
  title: string;
}) => {
  return (
    <View style={cardStyle.middle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: 10,
          borderBottomWidth: 0.2,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
      </View>
      {content}
    </View>
  );
};
