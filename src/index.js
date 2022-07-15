import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './components/Context';

ReactDOM.render(
 <BrowserRouter> 
 <AppProvider>
  <App />
  </AppProvider>
 </BrowserRouter>
 
 ,
  document.getElementById('root')
);
