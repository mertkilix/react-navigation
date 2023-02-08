import 'react-native-gesture-handler';

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();




import MenuScreen from "./Screens/MenuScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return ( 


  /* STACK NAVIGATION
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
    
    </>*/
  /* <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
     <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
    */
    
<>
<NavigationContainer>
      <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ drawerPosition:'left' }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
        </Drawer.Navigator>
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
