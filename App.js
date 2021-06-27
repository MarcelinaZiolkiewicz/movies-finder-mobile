import React from 'react';

import {createNativeStackNavigator} from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./components/HomeScreen";
import SingleMoviePage from "./components/SingleMoviePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Szukaj">
        <Stack.Screen
            name="Film"
            component={SingleMoviePage}
            options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
            name="Szukaj"
            component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
