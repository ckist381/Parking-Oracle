/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 11/16/2021
-------------------------------------*/

import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import Picker from 'react-native-universal-picker';

import {
  StyledContainer,
  PageTitle,
  SubTitle,
  dropDownContainer,  
  StyledButton,
  ButtonText,
  ErrorButtonContainer
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
                <PageTitle>Pick by Lot</PageTitle>
                <SubTitle>Select the lot you want to see</SubTitle>
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
        
      <Text style={{textAlign: "center"}}>{this.state.selectedLotName == '' ?  <View/> : <View style={{textAlign:'center'}}><Text>{this.state.selectedLotName} is selected.  The lot is {this.state.selectedLotFullness * 100}% full.</Text></View>}</Text>
        
      <ErrorButtonContainer>
        <Text style={{textAlign: 'center', color: '#999', fontSize:12}}>Is something broken?  {'\n'}Does the fulness not look right to you?  {'\n'}{'\n'}Click below to report an error and we'll do our best to get back to you!</Text>
        <StyledButton onPress={() => Linking.openURL('mailto:parkingoracleteam@gmail.com?subject=[App Support] I\'d like to report an error!')} title="parkingoracleteam@gmail.com">
          <ButtonText>Report An Error</ButtonText></StyledButton>
      </ErrorButtonContainer>

      </StyledContainer>   
    )
  }
}
