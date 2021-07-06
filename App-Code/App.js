/*-----------------------------------
Filename: App.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Load welcome page and call any additional functions for loading the app
Last Edit: 7/6/2021
-------------------------------------*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Home from './components/Home';
import byLotScreen from './components/byLot';
import byPassScreen from './components/byPass';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: false,
    },   
  },
  byLot: {
    screen: byLotScreen,
    navigationOptions: {
      title: "Pick by Lot",
    },
    
  },
  byPass: {
    screen: byPassScreen,
    navigationOptions: {
      title: "Pick by Pass",
    },
    
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});