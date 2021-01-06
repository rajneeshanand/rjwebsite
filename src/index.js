import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import APPL from './APPL';
import reportWebVitals from './reportWebVitals';
//import Avatar from './Avatar';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
//<React.StrictMode><Avatar/></React.StrictMode>
<>
<BrowserRouter>
<APPL/>
</BrowserRouter>
</>
, document.getElementById('root'));


reportWebVitals();
