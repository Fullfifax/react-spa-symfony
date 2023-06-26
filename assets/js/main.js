import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import UserCreate from './pages/user/UserCreate';
import UserEdit from './pages/user/UserEdit';
import UserList from './pages/user/UserList';
import UserShow from './pages/user/UserShow';

createRoot(document.getElementById('root')).render(
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/user" element={<UserList/>} />
            <Route path="/user/create"  element={<UserCreate/>} />
            <Route path="/user/edit/:id"  element={<UserEdit/>} />
            <Route path="/user/show/:id"  element={<UserShow/>} />
        </Routes>
    </Router>
);