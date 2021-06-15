import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <Text style={styles.descText}>This is an app that tells you the fullness of parking lots.  Select how you want to view the lots.</Text>
      <StatusBar style="auto" />

      <View style={{flexDirection:'row', margin: 5}}>
        <TouchableOpacity
          onPress={() => alert('You selected by lot!')}
          style={styles.button}>
          <Text style={styles.buttonText}>View by Lot</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You selected by pass!')}
          style={styles.button}>
          <Text style={styles.buttonText}>View by Pass</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,     
  },
  descText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#711931",
    padding: 20,
    borderRadius: 5,
    margin: 10,       
  },
  buttonText: {
    fontSize: 20, 
    color: '#fff',     
  }

});
