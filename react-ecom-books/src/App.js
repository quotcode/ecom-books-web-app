import React from 'react'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import toast, {Toaster} from 'react-hot-toast';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import BooksCatalog from './components/BooksCatalog';

const showMsg = () => {
    toast("Hi");
}

const App = () => {
    return (
        <Router >
            <div>
                <Toaster />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/catalog" element={<BooksCatalog/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
