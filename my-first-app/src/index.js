import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom';
import ContactRouter from './modules/contact/router.js';
//import './contact.css';
import './css/contact.css';
import './css/leftBar.css';

import {Store_One} from './modules/redux_One/Store_One.js';


import SideBar from './modules/sideBar/SideBar';
import { Provider } from 'react-redux';
import store from './store_two';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Provider store={store}>
    
    <SideBar/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
