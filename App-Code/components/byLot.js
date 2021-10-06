/*-----------------------------------
Filename: byLot.js
Original Author: Lukas H.
Date of Creation: 7/6/2021
Description: Page that displays parking lot fullness by lot
Last Edit: 10/6/2021
-------------------------------------*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  TableHeading,
  TableHeadingText, 
  TableText
} from './styles';

//this'll be change to the data from the database, it's hard coded atm

const lots = ['Lot A', 'Lot B (Nonfunctional)', 'Lot C (Nonfunctional)'];
//dropdown code: https://github.com/tableflip/react-native-select-multiple#readme
//requires react-native-select-multiple

/*display table
  https://www.positronx.io/react-native-table-component-tutorial-with-example/
  https://www.npmjs.com/package/react-native-table-component
  */
const tableHead = ['Lot Name', 'Fullness'];
const tableData = 
[
  [lots[0], '50%'],
  [lots[1], '100%'],
  [lots[2], '69%'],       
];

export default class byLotScreen extends Component {
  constructor(props) {
    super(props);
    this.tableState = {
      tableHead: tableHead,
      tableData: tableData
    }
  }

  
  state = { selectedLots: [] } //used in dropdown

  //dropdown selection state
  onSelectionsChange = (selectedLots) => {
    this.setState({ selectedLots })
  }

  //render the page
  render() {

    const tableState = this.tableState;
    return (
      <StyledContainer>
        {/*Error Button has been temporarily removed from this page bc it's
            not needed for current prototype. */}      
        <PageTitle>Pick by Lot</PageTitle>
        <SubTitle>Select the lot(s) you want to see</SubTitle>

        <SelectMultiple
          items={lots}
          selectedItems={this.state.selectedLots}
          onSelectionsChange={this.onSelectionsChange} 
        />
 
        {/*Display Table */}
        {/* Currently using hard coded values as placeholders, these will be replaced with database values */}
        <View>
          <Table borderStyle={{borderWidth: 2, borderColor: 'black', flex:1}}>
            <Row data={tableState.tableHead}/>      
            <Rows data={tableState.tableData}/>
          </Table>  
        </View>    
      </StyledContainer>
    )
  }
}