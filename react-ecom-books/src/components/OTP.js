import React from 'react';
import "../css/OTP.css";

const OTP = () => {
    return (
        <div className='otp-main-container text-align-center'>
            <h5>Two-step authentication</h5>
            <form className="">
                <p>Enter 4-dgit OTP sent to your mobile phone</p>
                <div className="row g-1">
                    <div className="col-3">
                        <input type="text" className="form-control" id="digit-1" placeholder="0"/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control" id="digit-2" placeholder="0"/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control" id="digit-3" placeholder="0"/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control" id="digit-4" placeholder="0"/>
                    </div>
                </div>

                <div className="row col-13 g-1 my-2">
                    <button type="submit" className="btn btn-primary col-4">
                        Verify
                    </button>
                    <button type="submit" className="btn btn-outline-dark col-4 ms-2">
                        Resend OTP
                    </button>
                </div>
            </form>

        </div>

    )
}

export default OTP