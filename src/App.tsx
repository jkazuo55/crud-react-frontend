import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UsersList } from './components/UsersList';
import { UserAdd } from './components/UserAdd';
import { UserEdit } from './components/UserEdit';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<UsersList/>} ></Route>
         <Route path="/create-user" element={<UserAdd/>} ></Route>
         <Route path="/edit-user/:_id" element={<UserEdit/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
