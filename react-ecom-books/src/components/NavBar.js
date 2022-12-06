import React from 'react'
import "../css/NavBar.css"

import {Link} from 'react-router-dom';

import {BsPerson} from 'react-icons/bs'
import {AiOutlineGift} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {TbStack2} from 'react-icons/tb'
import Home from './Home';
import BooksCatalog from './BooksCatalog';

const NavBar = () => {
    return (
            <div>
                <nav className="nav-container container">
                    <div className="row">
                        <div className="col-1 my-1">
                            <Link to="/" className="navbar-item">Booksy</Link>
                        </div>
                        <div className="col-6">
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search books by title, author, publisher, or your fav generes"
                                    aria-label="Search"/>
                                <button className="btn btn-outline-secondary" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="navbar-end-items col-5">
                            <div className="d-flex justify-content-end justify-space-evenly">

                                <div className="navbar-item me-1 dropdown">
                                    <button
                                        className="btn btn-light dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <BsPerson
                                            style={{
                                            fontSize: '20px'
                                        }}/>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Rewards
                                                <span><AiOutlineGift/></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Your wishlist
                                                <span><AiFillHeart/></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Orders
                                                <span><BsFillBagCheckFill/></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Transactions
                                                <span><TbStack2/></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Logout
                                                <span><FiLogOut/></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <button className="btn btn-light navbar-item col-sm-2 me-1">Sign in</button>
                                <div className="navbar-item me-1 dropdown">
                                    <button
                                        className="btn btn-light dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        EN
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hindi
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Marathi
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Spanish
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Tamil
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-dark position-relative navbar-item col-sm-2">
                                    Cart
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                        0
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>

                        </div>

                    </div>
                </nav>

            </div>       
    )
}

export default NavBar