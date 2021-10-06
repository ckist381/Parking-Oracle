/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 10/5/2021
-------------------------------------*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import { Table, Row, Rows } from 'react-native-table-component';
import { withTheme } from 'styled-components/native';

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  TableContainer,
  TableHeading,
  TableHeadingText,
  TableText
} from './styles';

//this'll be change to the data from the database, it's hard coded atm

const lots = ['Lot A', 'Lot B (Nonfunctional)', 'Lot C (Nonfunctional)'];
//dropdown code: https://github.com/tableflip/react-native-select-multiple#readme
//requires react-native-select-multiple

//another dropdown example: https://www.npmjs.com/package/react-native-multiple-select 
//this one's a lil more complex but closer to what I was picturing

export default class byLotScreen extends Component {
  state = { selectedLots: [] }

  //dropdown selection state
  onSelectionsChange = (selectedLots) => {
    this.setState({ selectedLots })
  }

  /*display table
  https://www.positronx.io/react-native-table-component-tutorial-with-example/
  https://www.npmjs.com/package/react-native-table-component

  this is creating the table, actually viewing it is in the render function
  */
  constructor(props) 
  {
    super(props);
    this.state = {
      tableHead: ['Lot Name', 'Fullness'],
      tableData: [
        ['Lot A', '50%'],
        ['Lot B', '100%'],
        ['Lot C', '69%'],       
      ]
    }
  }

  //render the page
  render() {
    const state = this.state;
    return (
      <StyledContainer>                    
          <InnerContainer>        
            {/*Error Button has been temporarily removed from this page bc it's
            not needed for current prototype. */}      
              <PageTitle>Pick by Lot</PageTitle>
              <SubTitle>Select the lot(s) you want to see</SubTitle>
              {/*Dropdown still needs to be styled */}
               <SelectMultiple
                  items={lots}
                  selectedItems={this.state.selectedLots}
                  onSelectionsChange={this.onSelectionsChange} />
            
            {/*Display Table */}
            {/* Currently using hard coded values as placeholders, these will be replaced with database values */}
              <TableContainer>
                <Row data={state.tableHead} style={TableHeading} textStyle={TableHeadingText}/>
                <Rows data={state.tableData} textStyle={TableText}/>
              </TableContainer>           
            </InnerContainer>
      </StyledContainer>
    )
  }
}