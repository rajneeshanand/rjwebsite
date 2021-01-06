import React from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';

const Avatarlist=(props)=>{
			return(
				
			<div className="container  ma4 bg-light-purple pa4 dib tc grow">
			
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
			    <h3>{props.name}</h3>
			    <p> {props.work}</p>
				</div>
			
			)
}

export default Avatarlist;