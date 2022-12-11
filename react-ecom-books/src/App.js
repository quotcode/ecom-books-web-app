import React from 'react'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {Toaster} from 'react-hot-toast';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BooksCatalog from './components/BooksCatalog';
import SignUp from './components/SignUp';
import Login from './components/Login';
import OTP from './components/OTP';

const App = () => {
    return (
        <Router >
            <div>
                <Toaster />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/signup" element={<SignUp />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/otp" element={<OTP />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
