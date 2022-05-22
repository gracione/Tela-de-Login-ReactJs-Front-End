import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './pages/Login/index';
import Listagem from './pages/Listagem/index';
import Registrar from './pages/Registrar/index';

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/lists" element={<Listagem />} />
                <Route path="/register" element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    );
}