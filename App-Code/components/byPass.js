/*-----------------------------------
Filename: byPass.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by pass type
Last Edit: 10/31/2021
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


//snazzy stack overflow reference
//https://stackoverflow.com/questions/40201699/objects-in-react-native

constructor() {
super();
  this.state = {

    //array of objects containing values
    LotData : [] ,
    selectedLotName: '',
    selectedLotFullness: 0,
  }
}


async componentDidMount() { 
  query = await fetch("http://18.220.53.238:5000/get"); 
  json = await query.json(); 
  json = json.lots; 
  this.setState({ 
    LotData: json
  })
}

  render() {
    console.log(this.state.LotData);
    
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
            selectedValue={this.state.selectedLotName}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedLotName:itemValue.name, selectedLotFullness:itemValue.fullPer})}
          >

          {/* maps values to items in the picker.  The value is the object, so when accessing elements you gotta do item.(member you wanna access)*/}
          <Picker.Item label="Please Select a Lot" color="#aaa"/>
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
        
      {this.state.selectedLotName == '' ?  <View/> : <View style={{alignItems:'center'}}><Text>{this.state.selectedLotName} is selected.  The lot is {this.state.selectedLotFullness * 100}% full.</Text></View>}
          
      </StyledContainer>   
    )
  }
}
