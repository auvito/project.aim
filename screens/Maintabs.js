import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './HomeScreen';
import KonsumsiScreen from './Konsumsiscreen';
import OlahragaScreen from './Olahragascreen';
import TidurScreen from './Tidurscreen';


const HomeStack = createStackNavigator();
const KonsumsiStack = createStackNavigator();
const OlahragaStack = createStackNavigator();
const TidurStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function Maintabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Beranda',
            tabBarColor: '#ff926b',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Konsumsi"
          component={KonsumsiStackScreen}
          options={{
            tabBarLabel: 'Konsumsi',
            tabBarColor: '#ff926b',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Olahraga"
          component={OlahragaStackScreen}
          options={{
            tabBarLabel: 'Olahraga',
            tabBarColor: '#ff926b',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="run" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Tidur"
          component={TidurStackScreen}
          options={{
            tabBarLabel: 'Tidur',
            tabBarColor: '#ff926b',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="power-sleep" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
export default Maintabs;

function HomeStackScreen ({ navigation }) {
    return (
          <HomeStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#ff926b',
            },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight:'bold',
              }    
            }}>
          <HomeStack.Screen  name="Home" component={HomeScreen} options={{
            headerLeft: () => (
              <Icon.Button name='ios-menu' size= {25} backgroundColor= '#ff926b'
              onPress={() => navigation.openDrawer()} />
            )
          }} />
          </HomeStack.Navigator>);}
  
  function KonsumsiStackScreen ({ navigation }) {
    return (
    <KonsumsiStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#ff926b',
              },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight:'bold',
                }    
              }}>
            <KonsumsiStack.Screen  name="Konsumsi" component={KonsumsiScreen} options={{
            headerLeft: () => (
              <Icon.Button name='ios-menu' size= {25} backgroundColor= '#ff926b'
              onPress={() => navigation.openDrawer()} />
            )
          }} />
            </KonsumsiStack.Navigator>);}
  
  function OlahragaStackScreen ({ navigation }) {
    return (
    <OlahragaStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#ff926b',
              },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight:'bold',
                }    
              }}>
            <OlahragaStack.Screen  name="Olahraga" component={OlahragaScreen} options={{
            headerLeft: () => (
              <Icon.Button name='ios-menu' size= {25} backgroundColor= '#ff926b'
              onPress={() => navigation.openDrawer()} />
            )
          }} />
            </OlahragaStack.Navigator>);}
  function TidurStackScreen ({ navigation }) {
    return (
          <TidurStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#ff926b',
            },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight:'bold',
              }    
            }}>
          <TidurStack.Screen  name="Tidur" component={TidurScreen} options={{
            headerLeft: () => (
              <Icon.Button name='ios-menu' size= {25} backgroundColor= '#ff926b'
              onPress={() => navigation.openDrawer()} />
            )
          }} />
          </TidurStack.Navigator>);}
  
