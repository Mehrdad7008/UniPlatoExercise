//import CSS File
import '../index.css';

//import React & Libraries
import React, { useContext, useEffect } from 'react';

//import Functions & Components
import { Content, NavbarContext } from './index';
import {Page} from './index';

//import MUI Components
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

//constants
const START_DELAY = 2000;

const Search = () =>{
    const {setActive, active} = useContext<Content>(NavbarContext);
    useEffect(() => {setActive(Page.Search);}, []); //initial page to load
    return(
        <>
            <Grow in={(active === Page.Search)} {...((active === Page.Search) ? { timeout: START_DELAY } : {})}> 
                <Box className='uncompletedPage'>
                        <h2>
                            Search
                        </h2>
                </Box> 
            </Grow>
        </>
    );
}
export default Search;