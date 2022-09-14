//import CSS File
import './index.css';

//import React & Libraries
import * as React from 'react';

//import Functions & Components
import Main from './pages/index';

//import MUI Components
import {ThemeProvider, createTheme} from '@mui/material/styles';

//theme
const theme = createTheme({
  palette: {
    primary:{
      main: '#5BDAFF',
    },
    secondary:{
      main:"#151717"
    }
  }
})


function App(){
  return(
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App;
