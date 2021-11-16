/*-----------------------------------
Filename: styles.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Stylesheet for parking oracle mobile app
Last Edit: 11/16/2021
-------------------------------------*/

import styled from 'styled-components/native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// Colors - Used throughout the whole application
export const Colors = {
    primary: "#4a1020",
    secondary: "#711931",    
    brand: "#711931",
    gold: "#c6b683",
    red: "#711931",
    white: "#ffffff",
};

const {primary, secondary, brand, gold, red, white} = Colors;

export const StyledContainer = styled.View`
    flex: 1;       
    background-color: ${white};
    borderWidth: 15px; 
    borderColor: ${gold};
    borderTopWidth: 0px;
    borderBottomWidth: 0px;
    justify-content: center;
    padding: 30px;
`;

export const StyledButton = styled.TouchableOpacity`
    background-color: ${red};  
    padding: 20px;
    justify-content: center;
    borderRadius: 5px;
    margin: 10px;  
    height: 40px;    
`;

export const ButtonText = styled.Text`
    color: ${white};    
    font-size: 14px;
    textAlign: center;
`;

export const BigPageLogo = styled.Image`
    width: 300px;
    height: 165px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
`;

//What's going on here:
//    - each container is a different part of the app, like the
//      inner container is for text and the outer container is for
//      everything you see visually.  This is pretty much the react
//      version of a styles sheet in css

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing:1px;
    font-weight: bold;
    text-align: center;
    color: ${secondary};
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

//Dropdown Menu -----------------------------------------------

export const dropDownContainer = styled.Picker`    
    position: absolute;
    margin: 50px;
`;

//Error Button -----------------------------------------------

export const ErrorButtonContainer = styled.View`
    flex: 1; 
    justify-content: center;
    textAlign: center;
`;


