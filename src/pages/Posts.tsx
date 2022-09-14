//import CSS File
import '../index.css';

//import React & Libraries
import React, {useContext, useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

//import Functions & Components
import { NavbarContext, Content } from './index';
import FetchData from '../components/FetchData';
import {Page} from './index';

//import MUI Components
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

//import Icons


const START_DELAY = 0;

const queryClient:QueryClient = new QueryClient();

const Posts = () =>{
    const {setActive, active} = useContext<Content>(NavbarContext);
    useEffect(() => {setActive(Page.Posts)}, []); //initial page to load
    return(
        <>
        <QueryClientProvider client={queryClient}>
            <Grow in={(active === Page.Posts)} {...((active === Page.Posts) ? { timeout: START_DELAY } : {})}> 
                <Box className='columnListBox PostsPage'>
                    <FetchData></FetchData>
                </Box>
            </Grow>
        </QueryClientProvider>
        </>
    );
}
export default Posts;