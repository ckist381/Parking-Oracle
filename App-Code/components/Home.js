/*-----------------------------------
Filename: Home.js
Original Author: Lukas H.
Date of Creation: 6/15/2021
Description: Welcome/Landing page for the parking oracle mobile app 
Last Edit: 10/18/2021
-------------------------------------*/

// Homescreen.js
import React, { Component } from 'react';
import { View, Alert } from 'react-native';

//importing all the styles
import {
    StyledContainer, BigPageLogo, PageTitle, SubTitle, StyledButton, ErrorButton, Colors, ButtonText
} from './styles';

//colors
const {} = Colors;

//alert reference:
//https://reactnative.dev/docs/alert
//alert is not a requirement for prototype 1, i'm just adding it to make it look cooler
const showAlert = () =>
    Alert.alert(
      "Stop!  This part isn't functional yet!",
      "Prototype one only considers the lot selection, we have not yet completed selecting lots by their respective pass type.",
      [        
        { text: "OK", onPress: () => console.log("Alert OK Pressed") } //it just shows okay since we don't need a cancel button for this
      ]
    );


//This renders the page
export default class Homescreen extends Component {
  render() {
    return (

      <StyledContainer>
        {/*makes everything centered on page*/}
        <View style={{alignItems:'center'}}> 
        <BigPageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
          <PageTitle>Parking Oracle</PageTitle>
          <SubTitle>Welcome to the app!</SubTitle>

          {/*flex direction just makes the buttons go next to each other*/}
            <View style={{flexDirection:'row'}}> 
              <StyledButton onPress={() => this.props.navigation.navigate('byLot')}>
                <ButtonText>Select By Lot</ButtonText>
              </StyledButton>
                    
              <StyledButton onPress={showAlert}><ButtonText>Select By Pass</ButtonText></StyledButton>
              {/*Currently Nonfunctional (prototype is focusing on by lot selection) */} 
              {/*
                <StyledButton onPress={() => this.props.navigation.navigate('byPass')}>
                  <ButtonText>Select By Pass</ButtonText> 
                </StyledButton>
              */}                  
            </View>   
          </View>
      </StyledContainer>      
    )
  }
}