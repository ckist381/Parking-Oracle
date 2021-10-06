/*-----------------------------------
Filename: byPass.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Page that displays parking lot fullness by pass type
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
const byPass = () =>{
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Pick by Pass</PageTitle>
                <SubTitle>Select the pass(es) you want to see</SubTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default byPass;
