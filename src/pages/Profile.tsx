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

const Profile = () =>{
    const {setActive, active} = useContext<Content>(NavbarContext);
    useEffect(() => {setActive(Page.Profile);}, []); //initial page to load
    return(
        <>
            <Grow in={(active === Page.Profile)} {...((active === Page.Profile) ? { timeout: START_DELAY } : {})}> 
                <Box className={'uncompletedPage'}>
                        <h2>
                            Profile
                        </h2>
                </Box> 
            </Grow>
        </>
    );
}
export default Profile;