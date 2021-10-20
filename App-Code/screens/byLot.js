/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 7/3/2021
-------------------------------------*/

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle
} from '../components/styles'

//function that loads the app page information
const byLot = () =>{
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Pick by Lot</PageTitle>
                <SubTitle>Select the lot(s) you want to see</SubTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default byLot;
