/*-----------------------------------
Filename: Home.js
Original Author: Lukas H.
Date of Creation: 6/15/2021
Description: Welcome/Landing page for the parking oracle mobile app 
Last Edit: 11/16/2021
-------------------------------------*/

// Homescreen.js
import React, { Component } from 'react';
import { View } from 'react-native';

//importing all the styles
import {
    StyledContainer, BigPageLogo, PageTitle, SubTitle, StyledButton, Colors, ButtonText
} from './styles';

//colors
const {} = Colors;

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
                    
              <StyledButton onPress={() => this.props.navigation.navigate('byPass')}><ButtonText>Select By Pass</ButtonText></StyledButton>            
            </View>   
          </View>
      </StyledContainer>      
    )
  }
}