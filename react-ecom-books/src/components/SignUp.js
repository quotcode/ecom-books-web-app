import React from 'react'

import "../css/SignUp.css";

import {Link} from "react-router-dom";
const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="hero-signup">
                <h3>Create account</h3>
                <p>One step closer to be a part of Booksy's! | Let's get you signed up quickly....</p>
            </div>

            <div className="signup-form-container">

                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder='First name and Last name'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone" className="form-label">
                            Phone
                        </label>
                        <input type="text" className="form-control" id="inputPhone"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </div>
                    
                    <p className='col-12'>Already have an account?
                        <Link to="/login">Sign in</Link>
                    </p>
                    <p className='col-12'>
                        * By creating an account or logging in, you agree to Booksy's Conditions of Use
                        and Privacy Policy.

                    </p>
                </form>

            </div>
        </div>

    )
}

export default SignUp