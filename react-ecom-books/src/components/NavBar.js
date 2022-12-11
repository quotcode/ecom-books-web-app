import React from 'react'
import "../css/NavBar.css"

import {Link} from 'react-router-dom';

import {BsPerson, BsSearch} from 'react-icons/bs'
import {AiOutlineGift} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {TbStack2} from 'react-icons/tb'

const NavBar = () => {
    
    return (
            <div>
                <nav className="nav-container container">
                    <div className="row">
                        <div className="col-1 my-1">
                            <Link to="/" className="navbar-item logo">Booksy</Link>
                        </div>
                        <div className="col-6">
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search books by title, author, publisher, or your fav generes"
                                    aria-label="Search"/>
                                <div className="m-2" type="submit">
                                    <span><BsSearch
                                            style={{
                                            fontSize: '20px'
                                        }}/></span>
                                </div>
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
                                            <Link className="dropdown-item" to="/">
                                                Rewards
                                                <span>{" | "}</span>
                                                <span><AiOutlineGift/></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Your wishlist
                                                <span>{" | "}</span>
                                                <span><AiFillHeart/></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Orders
                                                <span>{" | "}</span>
                                                <span><BsFillBagCheckFill/></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Transactions
                                                <span>{" | "}</span>
                                                <span><TbStack2/></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Logout
                                                <span>{" | "}</span>
                                                <span><FiLogOut/></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <Link className="btn btn-light navbar-item col-sm-2 me-1" to="/signup">Sign up</Link>
                                <div className="navbar-item me-1 dropdown">
                                    <button
                                        className="btn btn-light dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        EN
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="google_translate_element">
                                        {/* <li>
                                            <Link className="dropdown-item" to="/">
                                                English
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Hindi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Marathi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Spanish
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/">
                                                Tamil
                                            </Link>
                                        </li> */}
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