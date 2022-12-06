import React from 'react'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { IconName } from "react-icons/fa";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
