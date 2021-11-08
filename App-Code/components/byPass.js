/*-----------------------------------
Filename: byPass.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by pass type
Last Edit: 11/5/2021
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

//Array of Test Day (will be replaced with database data later)
const LotTestInfo = [
 
];

//get a list of passes that's unique (used in dropdown)
//snatched code from here
//https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript

let uniquePassSet = [...new Set(LotTestInfo.map(item => item.pass))];
//console.log("Unique passes : " + uniquePassSet); //debug

//then upon selecting that pass, find all the Lots that have that pass and put them in an array of objects

// ----------------------------- 
//  getRequestedLots -> 
//    Test if the selected pass exists in the array of Lots and store 
//    that value to be used later 
//
//      parameters: selectedPass -> pass to test if exists in array
//      returns: array of objects that contain the selectedPass
// ----------------------------- //
function getRequestedLots(LotsArray, selectedPass){
  let requestedLots = [];
  //console.log(LotsArray); //debug

  requestedLots = LotsArray.filter(x => x.pass === selectedPass);
  //console.log("Requested Lots array: \n"); //debug
  //console.log(requestedLots); //debug

  return(requestedLots);
}
//lastly display that array (this part is in the views later)


export default class byLotScreen extends Component {

//snazzy stack overflow reference on objects
//https://stackoverflow.com/questions/40201699/objects-in-react-native

constructor() {
super();
  this.state = {

    //array of objects containing values    
    LotData : LotTestInfo,    
    selectedLotData: [],
    selectedLotName: '',
    selectedLotFullness: 0,
    selectedLotPass: '',
  }
}

async componentDidMount() { 
  query = await fetch("http://10.0.0.207:5000/pass"); 

  json = await query.json(); 

  json = json.passes; 

  this.setState({ 

    LotData: json
  })
}


  render() {    

    const renderSelectedLots = this.state.selectedLotData.map((lot)=> 
      <View>
        <Text>Lot Name: {lot.lotName} / Lot Fullness: {lot.fullPer}  / Required Pass: {lot.pass}{'\n'}</Text>      
      </View>
    );

    return (  
      <StyledContainer> 
        {/*header*/}        
        <View style={{alignItems:'center'}}>           
                <PageTitle>Pick by Pass</PageTitle>
                <SubTitle style={{margin:10}}>Select what pass you would like to view the lot information for.</SubTitle>
        </View>

        {/*dropdown menu (using array listed above)*/}
        <View style={{dropDownContainer}}>
        {/*maps array values for LotNames to picker items*/}
        { <Picker 
            selectedValue={this.state.selectedLotPass}
            onValueChange={(itemValue) => this.setState({selectedLotData:getRequestedLots(this.state.LotData, itemValue), selectedLotPass:itemValue})}
          >

          {/* maps values to items in the picker.  The value is the object, so when accessing elements you gotta do item.(member you wanna access)*/}
          <Picker.Item label="Please Select a Pass" color="#aaa"/>

          {uniquePassSet.map(item => {
            return(<Picker.Item label={item} value={item} key={item}/>)
          })}        

          </Picker>
        }
        </View>

        {/*display based off what was selected            
          Conditional code: https://stackoverflow.com/questions/44256969/react-native-display-view-depending-on-conditional
            if something not selected, display nothing.  if something is selected, list the lot and the associated fullness
            also uses the index of the selected lot to get the fullness (assumes arrays are of same size)
        */}
      
      {this.state.selectedLotPass == '' ?  <View/> : <View style={{alignContent: "center", margin:10}}><Text style={{textAlign: "center"}}>Pass {this.state.selectedLotPass} is selected.{'\n'}These are the lots associated with that pass: </Text></View>}
      <View style={{alignItems:'center', margin:10, textAlign: 'center'}}><Text>{renderSelectedLots}</Text></View>      
      </StyledContainer>   
    )
  }
}
