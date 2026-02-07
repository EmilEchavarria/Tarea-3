import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Tarea 3</h1>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    🏠 Inicio
                </NavLink>
                <NavLink to="/sumadora" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    ➕ Sumadora
                </NavLink>
                <NavLink to="/traductor" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    🗣 Traductor
                </NavLink>
                <NavLink to="/tabla" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    ✖ Tabla
                </NavLink>
                <NavLink to="/experiencia" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    🎥 Experiencia
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
