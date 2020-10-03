import React, { useEffect }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContent } from './screens/drawertabs';

import {AuthContext} from './screens/context'

import Maintabs from './screens/Maintabs';
import SettingsScreen from './screens/Settingscreen';
import SupportScreen from './screens/Supportscreen';

import RootStackScreen from  './screens/RootStackScreen'
import { ActivityIndicator } from 'react-native-paper';

const Drawer = createDrawerNavigator();


function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);


  const authContext = React.useMemo(() => ({
  signIn: () => {
    setUserToken('gggg')
    setIsLoading(false);
  },
  signOut: () => {
    setUserToken(null)
    setIsLoading(false);
  },
  signUp: () => {
    setUserToken('gggg')
    setIsLoading(false);
  },
  }));


  useEffect(() => {
    setTimeout(() =>  {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken !== null ? (
      <Drawer.Navigator drawerContent={props =><DrawerContent {... props} />}>
       <Drawer.Screen name="HomeDrawer" component={Maintabs} />
       <Drawer.Screen name="SupportScreen" component={SupportScreen} />
       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
      )
    :
    <RootStackScreen></RootStackScreen>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
  
export default App;
 
