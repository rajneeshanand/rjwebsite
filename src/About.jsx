import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import web from "../src/images/about.png";
import Common from './Common';
import 'tachyons';

const About=()=>{
    return(
        <>
       <Common 
       name='Welcome to About Page of'
       imgsrc={web}
       visit="/Contact"
       btname="Contact Now"
       />
       <h3 className="pl6 hover-light-purple ma2">
            Writing well designed, testable, efficient code by using best software development practices.<br></br>
            Creating website layout/user interfaces by using standard HTML/CSS practices.<br></br>
            Integrating data from various back-end services and databases.
       </h3>
        </>

    );
}
export default About;