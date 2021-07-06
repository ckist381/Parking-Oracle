/*-----------------------------------
Filename: Welcome.js
Original Author: Lukas H.
Date of Creation: 6/15/2021
Description: Welcome/Landing page for the parking oracle mobile app 
Last Edit: 7/6/2021
-------------------------------------*/

// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//importing all the styles
import {
    StyledContainer, InnerContainer, BigPageLogo, PageTitle, SubTitle, LeftIcon, RightIcon, StyledButton, Colors, ButtonText
} from './styles';

//colors
const {} = Colors;

export default class Homescreen extends Component {
  render() {
    return (

      <StyledContainer>
            <InnerContainer>
                <BigPageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
                <PageTitle>Parking Oracle</PageTitle>
                <SubTitle>Welcome to the app!</SubTitle>

                {/*this just makes the buttons go next to each other*/}
                <View style={{flexDirection:'row'}}> 
                    <StyledButton onPress={() => this.props.navigation.navigate('byLot')}>
                        <ButtonText>Select By Lot</ButtonText>
                    </StyledButton>
                    <StyledButton onPress={() => this.props.navigation.navigate('byPass')}>
                        <ButtonText>Select By Pass</ButtonText>
                    </StyledButton>                    
                </View>   
            </InnerContainer>
      </StyledContainer>      
    )
  }
}