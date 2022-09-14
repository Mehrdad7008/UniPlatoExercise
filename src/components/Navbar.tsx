//import CSS File
import '../index.css';

//import React & Libraries
import React, { useState, useEffect } from 'react';

//import Functions & Components
import {HomeButton, SearchButton, PostsButton, ProfileButton} from './Buttons';

//import MUI Components
import Box from '@mui/material/Box';


function Navbar(props:any){
  //Just for gathering the buttons together
  return(
    <> 
      <Box className='navbarContainer'>
      <HomeButton></HomeButton>
      <SearchButton></SearchButton>
      <PostsButton></PostsButton>
      <ProfileButton></ProfileButton>
      </Box>
    </>
  )
}
export default Navbar;