/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 10/19/2021
-------------------------------------*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Picker from 'react-native-universal-picker';

import {
  StyledContainer,
  PageTitle,
  SubTitle,
  dropDownContainer
} from './styles';


//will be replaced with database query
const LotNames = ['Lot A', 'Lot B', 'Lot C'];
const LotFullness = [50, 100, 69];

export default class byLotScreen extends Component {
  state = {
    selectedLot: '',
    selectedLotIndex: 0
  };

  onValueChange = (itemValue, itemIndex) => {
    this.setState({
      selectedLot: itemValue,
      selectedLotIndex: itemIndex 
    });
  }
  
  render() {
    return (  
      <StyledContainer> 
        {/*header*/}        
        <View style={{alignItems:'center'}}>           
                <PageTitle>Pick by Lot</PageTitle>
                <SubTitle>Select the lot you want to see</SubTitle>
        </View>

        {/*dropdown menu (using array listed above)*/}
        <View style={{dropDownContainer}}>
          <Picker
            selectedValue={this.state.selectedLot}
            onValueChange={this.onValueChange}
          >        
        {/*maps array values for LotNames to picker items*/}
          {LotNames.map((item, index) => {
              return (
                <Picker.Item label={item} value={item} key={index}/>) 
              })}            
          </Picker>
        </View>

        {/*display based off what was selected            
          Conditional code: https://stackoverflow.com/questions/44256969/react-native-display-view-depending-on-conditional
            if something not selected, display nothing.  if something is selected, list the lot and the associated fullness
            also uses the index of the selected lot to get the fullness (assumes arrays are of same size)
        */}
          
      { this.state.selectedLot == '' ?  <View/> : <View style={{alignItems:'center'}}><Text>{this.state.selectedLot} is selected.  The lot is {LotFullness[this.state.selectedLotIndex]}% full.</Text></View> }
          
      </StyledContainer>   
    )
  }
}