import React from 'react'

import "../css/SignUp.css";
import "../css/Login.css"

import {Link} from "react-router-dom";
const SignUp = () => {
    return (
        <div className="login-container">
            <div className="hero-signup">
                <h3>Where have you been?</h3>
                <p>Let's get you logged in quickly.</p>
            </div>

            <div className="login-form-container">

                <form className="row g-3">
                    
                    <div className="col-md-12">
                        <label htmlFor="inputPhone" className="form-label">
                            Phone
                        </label>
                        <input type="text" className="form-control login-phone" id="inputPhone"/>
                    </div>
                    {/* <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div> */}
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control login-pass" id="inputPassword4"/>
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-secondary">
                            Continue
                        </button>
                    </div>
                    
                    <p className='col-12'>Not have an account?
                        <Link to="/signup">Sign up</Link>
                        <br></br>
                        <Link to="/otp">OTP</Link>
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