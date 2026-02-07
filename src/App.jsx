import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';

function App() {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sumadora" element={<Sumadora />} />
                    <Route path="/traductor" element={<Traductor />} />
                    <Route path="/tabla" element={<Tabla />} />
                    <Route path="/experiencia" element={<Experiencia />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
