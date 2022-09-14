//import CSS File
import '../index.css';

//import React & Libraries
import React, { useState, useEffect } from 'react';
import {useInfiniteQuery } from 'react-query';

//import Functions & Components

//import MUI Components
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

//import Icons
import { CircularProgress } from '@mui/material';
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';

//constants
const ALTERNATIVE_IMAGE = 'https://i.ibb.co/G9gkYp2/unavailable-image-1.jpg';
const API_URL = 'https://uniplato.staging.uniplato.us/api/v1/mock-data';
const DESCRIPTION_LIMIT = 200;
const SCROLL_LIMIT = 900;
const DELAY = 500;


const FetchData = () =>{
    //Final data type
    type movieType = {
        id:number,
        title:string,
        description:string,
        image:string
    }
    //An array to save the ids of movies that we are showing their description completely
    const [showDescription, setShowDescription] = useState<number[]>([0]); 

    //A function & EventListener to decide when load next pages by showing the scroll of user 
    const body:(HTMLElement|null) = document.getElementById("root");
    const scrollHandle = () => {
        if(body !== null)
            if((body.scrollHeight - window.scrollY < SCROLL_LIMIT) && (hasNextPage)){
                fetchNextPage()      
            }
    }
    useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    }}, )

    //Fetch datas from the API and jsonify them
    const fetchMovies = async ({ pageParam = 1 }) => {
    const res = await fetch(API_URL + "?page=" + pageParam);
    return res.json();
    }
    //React Query
    const {isLoading, data,hasNextPage,isFetchingNextPage, error, fetchNextPage} = useInfiniteQuery(['data'], fetchMovies, 
    {getNextPageParam:(lastPage) => lastPage.data.page + 1})

    //This function will tell us show additional description or hide them by click of the user
    const clickHandler = (id:number) =>{
        return(
            showDescription.includes(id) ? 
            setShowDescription(showDescription.filter((element)=>element!==id)) :
            setShowDescription([...showDescription, id])
        )
    }
    //The data has not fetched yet...
    if(isLoading){
        return(
            <Box className='rowCenterBox'>
                <CircularProgress />
            </Box>
        )
    }
    if(error){
        return(
            <Box className='rowCenterBox'>
                <ErrorIcon />
            </Box>
        )
    }
    //Check data is valid or not
    if(data === undefined) {
        return(
            <Box className='rowCenterBox'>
                <h2>
                    "Nothing"
                </h2>
            </Box>
        )
    }
    else{
    return(
        <>          
            {
            data.pages.map(page => 
                page.data.data.map((movie:movieType)=> {
                    const {id, title, description, image} = movie;
                    return(
                        <React.Fragment key={id}>
                            <Grow in={(true)} {...({ timeout: (id + 1) * DELAY })}>
                                <Box className='columnListBox postBox' >

                                    {/*Picture of the movie*/}
                                    <img className='postImages' src ={image}
                                        onError={
                                        ({ currentTarget }) => {currentTarget.onerror = null; {/*Showing Alternative picture*/}
                                        currentTarget.src=ALTERNATIVE_IMAGE;}}/>

                                    {/*Title of the movie*/}    
                                    <Box className='postTitle'>
                                        {title}
                                    </Box>

                                    {/*Description of the movie  && Deciding to show the adition part or not(if it was...)*/}                            
                                    <Box onClick={()=> clickHandler(id)} className='postDescription'>
                                        {description.substring(0, DESCRIPTION_LIMIT)} 
                                        {(description.length < DESCRIPTION_LIMIT ) ?  "" : 
                                        showDescription.includes(id) ? description.substring(DESCRIPTION_LIMIT,) : 
                                        " ..."}
                                    </Box>
                                    
                                </Box>
                            </Grow>
                        </React.Fragment>
                    )})
                )
            }     
            <Box className='rowCenterBox'>
                {isFetchingNextPage && <CircularProgress/>}                 
            </Box>            
        </>
    )
}
}
export default FetchData;

