import React  from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function KonsumsiScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Konsumsi Screen</Text>
        <Text></Text>
      </View>
    );
  }

    export default KonsumsiScreen;