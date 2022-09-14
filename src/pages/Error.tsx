//import CSS File
import '../index.css';

//import React & Libraries
import React, { useContext, useEffect } from 'react';

//import Functions & Components
import { Content, NavbarContext } from './index';

//import MUI Components
import Box from '@mui/material/Box';


const Error = () => {
  const {setActive, active} = useContext<Content>(NavbarContext);
  useEffect(() => {setActive(0);}, []); //initial page
  return (
    <>
        <Box className='uncompletedPage'>
                <h2>
                    404 Not Found ):
                </h2>
        </Box> 
    </>
  );
};
export default Error;