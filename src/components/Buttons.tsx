//import CSS File
import '../index.css';

//import React & Libraries
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//import Functions & Components
import {NavbarContext, Content} from '../pages/index';
import {Page} from '../pages/index'


//import MUI Components
import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button';

//import Icons
import PostIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';


const HomeButton = () => {
    const {setActive, active} = useContext<Content>(NavbarContext);
    return(
            <Link to={"/"}  className='newLink'>
                <NavbarButton onClick={()=>{setActive(Page.Home);}} 
                variant={(active === Page.Home) ? "contained" : "text"}> {/* Changing the format of icon */}
                    {<HomeIcon/>}{(active===Page.Home ? "Home" : "")} 
                </NavbarButton>
            </Link>
        )
}
const SearchButton = () => {
    const {active, setActive} = useContext(NavbarContext);
    return(
            <Link to='/search' className='newLink'>
                <NavbarButton onClick={()=>setActive(Page.Search)}
                variant={(active === Page.Search) ? "contained" : "text"}>
                    <SearchIcon/>{(active===Page.Search) ? "Search" : ""}
                </NavbarButton>
            </Link>
    )
}
const PostsButton = () => { 
    const {active, setActive} = useContext(NavbarContext);
    return(
            <Link to='Posts' className='newLink'>
                <NavbarButton onClick={()=>setActive(Page.Posts)}
                variant={(active === Page.Posts) ? "contained" : "text"}>
                    <PostIcon/> {(active===Page.Posts) ? "Posts" : ""}
                </NavbarButton>
            </Link>

    )
}
const ProfileButton = () => { 
    const {active, setActive} = useContext(NavbarContext);
    return(
            <Link to='Profile' className='newLink'>
                <NavbarButton onClick={()=>setActive(Page.Profile)}
                variant={(active === Page.Profile) ? "contained" : "text"}>
                    <ProfileIcon/>{(active === Page.Profile) ? "Profile" : ""}
                </NavbarButton>
            </Link>
            )
}

const NavbarButton = styled(Button)({
    width:'25%',
    maxWidth:'100%',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1.1rem',
    marginTop: '7px',
    marginBottom: '7px',
    borderRadius: '35px',
    color: '#2BAEAE',
    fontFamily: 'Roboto Condensed',
    textDecoration: 'none'
}) as typeof Button;

export {HomeButton, SearchButton, PostsButton, ProfileButton};
