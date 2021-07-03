/*-----------------------------------
Filename: Welcome.js
Original Author: Lukas H.
Date of Creation: 6/15/2021
Description: Welcome/Landing page for the parking oracle mobile app 
Last Edit: 7/3/2021
-------------------------------------*/

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

//importing all the styles
import {
    StyledContainer, InnerContainer, BigPageLogo, PageTitle, SubTitle, LeftIcon, RightIcon, StyledButton, Colors, ButtonText
} from '../components/styles';

//icons
import {Octicons} from '@expo/vector-icons';

//colors
const {} = Colors;


/*  
    Func Name: Welcome
    Purpose: load the views for the welcome page
*/
const Welcome = () =>{
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <BigPageLogo resizeMode="cover" source={require('./../assets/logo.png')}/>
                <PageTitle>Parking Oracle</PageTitle>
                <SubTitle>Welcome to the app!</SubTitle>

                {/*this just makes the buttons go next to each other*/}
                <View style={{flexDirection:'row'}}> 
                    <StyledButton>
                        <ButtonText>Select By Lot</ButtonText>
                    </StyledButton>
                    <StyledButton>
                        <ButtonText>Select By Pass</ButtonText>
                    </StyledButton>                    
                </View>   
            </InnerContainer>
        </StyledContainer>
    );
}

export default Welcome;
