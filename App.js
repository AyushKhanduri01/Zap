import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AppTabNavigator from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

import firebase from 'firebase';
import db from './Config';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen: WelcomeScreen},
  Drawer : {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
