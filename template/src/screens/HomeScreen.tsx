import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

const HomeScreen = (): ReactElement => {
  return (
    <View style={{backgroundColor: 'gray', flex: 1}}>
      <Text>Home Screen </Text>
    </View>
  );
};

export default HomeScreen;
