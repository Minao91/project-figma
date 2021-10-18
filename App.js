import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert, Modal, Pressable, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { HomeScreen, ConnexionScreen, InscriptionScreen1, InscriptionScreen2, DiscoverScreen, SearchScreen1} from './components';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Inscription1" component={InscriptionScreen1} />
        <Stack.Screen name="Inscription2" component={InscriptionScreen2} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Search" component={SearchScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
