import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { DashBoard } from '../pages/DashBoard';

function RoutesApp () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;