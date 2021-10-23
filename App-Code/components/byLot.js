/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 10/23/2021
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

export default class byLotScreen extends Component {


//sketchy af website but I yoinked the code from here:
//https://xuykyuu.blogspot.com/2018/07/map-object-to-generate-pickeritem.html
//much more credible stack overflow reference:
//https://stackoverflow.com/questions/40201699/objects-in-react-native

constructor() {
super();
  this.state = {

    //array of objects containing values
    LotData : [
      {
        "name" : "Lot A",
        "fullness" : 50,
      },
      {
        "name" : "Lot B",
        "fullness" : 100,
      },
      {
        "name" : "Lot C",
        "fullness" : 69,
      },
    ],
    selectedLotName: '',
    selectedLotFullness: 0,
  }
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
        {/*maps array values for LotNames to picker items*/}
        { <Picker 
            selectedValue={this.state.selectedLotName}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedLotName:itemValue.name, selectedLotFullness:itemValue.fullness})}
          >

          {/* maps values to items in the picker.  The value is the object, so when accessing elements you gotta do item.(member you wanna access)*/}
          {this.state.LotData.map(item => {
            return(<Picker.Item label={item.name} value={item} key={item.name}/>)
          })
          }        
          </Picker>
        }
        </View>

        {/*display based off what was selected            
          Conditional code: https://stackoverflow.com/questions/44256969/react-native-display-view-depending-on-conditional
            if something not selected, display nothing.  if something is selected, list the lot and the associated fullness
            also uses the index of the selected lot to get the fullness (assumes arrays are of same size)
        */}
        
      {this.state.selectedLotName == '' ?  <View/> : <View style={{alignItems:'center'}}><Text>{this.state.selectedLotName} is selected.  The lot is {this.state.selectedLotFullness}% full.</Text></View>}
          
      </StyledContainer>   
    )
  }
}