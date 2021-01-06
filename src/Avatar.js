import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


const Avatar=()=>{
			return(
				
			<div className="h1edit">
				<h1> Welcome to Avatar World !!!</h1>
				<Avatarlist id="1" name="Raj" work="Web Developer"/>
				<Avatarlist id="2" name="Anand" work="Graphic Designer"/>
				<Avatarlist id="3" name="Rajneesh" work="coder"/>
				<Avatarlist id="4" name="Rj" work="Data Analytics"/>

			</div>
			
			)
}

export default Avatar;