//import CSS File
import '../index.css';

//import React & Libraries
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

//import Functions & Components
import Navbar from '../components/Navbar';

//import MUI Components
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

//pages
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Posts from './Posts';
import Error from './Error'; //This page is for invalid URLs



//export
export enum Page {Home=1, Search, Posts, Profile};
export {NavbarContext};
const NavbarContext = React.createContext<Content>({ //useContext
    active:0,
    setActive: (active)=>{}
});

export type Content = { //useState
    active: number,
    setActive: (active:number)=>void
}


const MainRouter = () => {

    const [active, setActive] = useState<number>(0);
    return(
        <NavbarContext.Provider value={{active, setActive}}>
            <Router>
                <Container maxWidth="xs" >
                    <Box className='pageContainer'>
                        <Switch >
                            <Route path='/' element={<Home/>}>
                            </Route>
                            <Route path ='search' element={<Search/>}>
                            </Route>
                            <Route path ='Posts' element={<Posts/>}>
                            </Route>
                            <Route path='Profile' element={<Profile/>}>
                            </Route>
                            <Route path='*' element={<Error/>}>
                            </Route>
                        </Switch>
                        <Box className='navbarContainer'>
                            <Navbar >
                            </Navbar>
                        </Box>  
                    </Box>
                </Container>
            </Router>
        </NavbarContext.Provider>

    )
}
export default MainRouter;

