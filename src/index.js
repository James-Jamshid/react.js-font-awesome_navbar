import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import About from './components/About';
import API from './components/API';
import GitHub from './components/GitHub';
import Libraries from './components/Libraries';
import Status from './components/Status';
import Icon_main from './components/Icon_main';
import Twitter from './components/Twitter';
import Message from './components/Message';
import Search from './components/Search';


import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/main' element={<Icon_main/>}></Route>
    <Route path='/twitter' element={<Twitter/>}></Route>
    <Route path='/message' element={<Message/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/API' element={<API/>}></Route>
    <Route path='/GitHub' element={<GitHub/>}></Route>
    <Route path='/Libraries' element={<Libraries/>}></Route>
    <Route path='/Status' element={<Status/>}></Route>
   
  </Routes>
  </BrowserRouter>
);

