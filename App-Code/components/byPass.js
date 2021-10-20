/*-----------------------------------
Filename: byPass.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Page that displays parking lot fullness by pass type
Last Edit: 7/7/2021
-------------------------------------*/

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  ErrorButton,
  ButtonText
} from './styles';

export default class byPassScreen extends Component {
  render() {
    return (
      <StyledContainer>          
          <InnerContainer>
              <ErrorButton><ButtonText>Report an Error</ButtonText></ErrorButton>
              <PageTitle>Pick by Pass</PageTitle>
              <SubTitle>Select the pass(es) you want to see</SubTitle>
          </InnerContainer>
      </StyledContainer>
    )
  }
}