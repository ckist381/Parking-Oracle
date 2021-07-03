/*-----------------------------------
Filename: App.js
Original Author: Lukas H.
Date of Creation: 7/3/2021
Description: Load welcome page and call any additional functions for loading the app
Last Edit: 7/3/2021
-------------------------------------*/

import React from 'react';

//screens
import Welcome from './screens/Welcome';

//loads the Welcome page after loading the app
export default function App() {
  return (
    <Welcome />
  );  
}

