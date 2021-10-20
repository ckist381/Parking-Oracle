/*-----------------------------------
Filename: App.js
Original Author: Lukas H.
Date of Creation: 10/5/2021
Description: Load home page and call any additional functions for loading the app
Last Edit: 7/6/2021
-------------------------------------*/

import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Home from './components/Home';
import byLotScreen from './components/byLot';
import byPassScreen from './components/byPass';


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