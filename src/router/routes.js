import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { DashBoard } from '../pages/DashBoard';
import { Register } from '../pages/Register';
import { Input } from "../pages/Input/index"
import { Output } from "../pages/Output/index"
import { Balance } from '../pages/Balance';
import { Menu } from '../components/Menu';

function RoutesApp () {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/cadastro" element={<Register />}/>
        <Route path="/entrada" element={<Input />}/>
        <Route path="/saida" element={<Output />}/>
        <Route path="/saldo_atual" element={<Balance />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;