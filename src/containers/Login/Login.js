import React from 'react';
// import React, {useState, useEffect} from 'react';
import "./Login.css";
function LoginPage(props) {
    const goToHome = () => props.history.push('/home');
    return (
        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form className="form">
                                <h3 className="text-center text-info mt-3">Admin Login</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                                    <button className="btn btn-info btn-md" onClick={goToHome}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
