import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "./Screens/MenuScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="MenuScreen" 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#333333'},
        headerTintColor:'#fff',
        headerTitleStyle:{ fontWeight:'bold'}
      }}>
      <Stack.Screen name="MenuScreen"    options={{ title: 'Login' }}
 component={MenuScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
