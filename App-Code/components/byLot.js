/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 10/18/2021
-------------------------------------*/

import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';

import {
  StyledContainer,
  PageTitle,
  SubTitle,
  dropDownContainer
} from './styles';


//will be replaced with database query
const LotNames = ['Lot A', 'Lot B', 'Lot C'];
const LotData = ['50%', '100%', '69%'];
const ViewResult = false;

export default class byLotScreen extends Component {

  state = {Lot: ''};  

  //sets the lot selected to what gets displayed on dropdown
  showLotData =(option)=>{
    if(option !== 'disabled')
    {
      this.setState({Lot: option});      
    }    
  }
  //render the page
  render() {

    return (  
      <StyledContainer> 
        {/*header*/}        
        <View style={{alignItems:'center'}}>           
                <PageTitle>Pick by Lot</PageTitle>
                <SubTitle>Select the lot you want to see</SubTitle>
        </View>

        {/*dropdown menu (using array listed above)*/}
          <Picker
              style={{dropDownContainer}}
              mode="dropdown"
              selectedValue={this.state.Lot}
              onValueChange={this.showLotData}> 
              {LotNames.map((item, index) => {
                  return (<Picker.Item label={item} value={item} key={index}/>) 
              })}
          </Picker>    
          
          {/*display based off what was selected
            //https://www.tabnine.com/code/javascript/classes/react-native/Picker
            //https://stackoverflow.com/questions/44256969/react-native-display-view-depending-on-conditional
          */}
          
          { this.state.Lot == '' ?  <View/> : <View style={{alignItems:'center'}}><Text>{this.state.Lot} is selected.</Text></View> }
        
      </StyledContainer>   
    )
  }
}