import React from 'react'
import Logo from '../../assets/images/logo.svg'

const AuthSidebar = () => {
    return (
        <div className="vh-100 py-3 w-100">
            <div className="login_sidebar h-100 d-flex  justify-content-center flex-column p-5">
                <a href="/" className="mb-5"><img src={Logo} alt="logo" /></a>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}

export default AuthSidebar