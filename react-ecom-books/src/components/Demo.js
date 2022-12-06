import React from 'react';

import toast, { Toaster } from 'react-hot-toast';
function Demo(){

    const showMsg = () => {
        return toast.success("Hi shivam");
    }

    return (
        <div>
            Demo
            <button className="btn btn-success" onClick={showMsg}>Click Me</button>
            <div>
                <Toaster />
            </div>
        </div>
    )
}

export default Demo