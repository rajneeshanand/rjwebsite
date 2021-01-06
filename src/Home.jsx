import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import web from "../src/images/home.png";
import Common from './Common';

const Home=()=>{
    return(
        <>

       <Common 
       name='Grow your buisness with'
       imgsrc={web}
       visit="/service"
       btname="Get Started"
       />
        </>

    );
}
export default Home;