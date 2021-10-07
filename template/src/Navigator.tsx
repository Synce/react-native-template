import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigator = (): React.ReactElement => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: 'Home'}}
      />
    </RootStack.Navigator>
  );
};
