import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.scss';
import { Routes, Route, NavLink } from "react-router-dom";

//components
import Home from './components/Home/Home';
import Students from './components/Student/Students';
import Users from './components/User/Users';

const App: React.FC = () => {
  let father:string = "app";
  return (
    <div className="App">
      <header id="main-header">
        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/'>Accueil</NavLink>
        </div>
        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/etudiants'>Etudiants</NavLink>
        </div>
        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to='/utilisateurs'>Utilisateurs</NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home father={father} />} />
          <Route path="/etudiants" element={<Students />} />
          <Route path="/utilisateurs" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
