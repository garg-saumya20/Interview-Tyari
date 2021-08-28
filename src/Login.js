import React from "react";
import { Link } from "react-router-dom";
import Nav from "./DesktopNav";
function Login() {
  return (
    <>
      <Nav />
      <div className="log-con">
        <div className="login-container">
          <h1>Sign-in</h1>
          <form className="">
            {/* <h5 align="left">E-mail</h5> */}
            <input className="inp" type="text" placeholder="Email" />
            {/* <h5 align="left">Password</h5> */}
            <input className="inp" type="password" placeholder="Password" />
            <button type="submit" className="login_signin-btn">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to our terms and conditions. Please see our
            privacy policy here.
          </p>
          <p>Not having account?</p>
          <Link to="/register">
            <button className="login_register-btn">Create your account</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Login;
