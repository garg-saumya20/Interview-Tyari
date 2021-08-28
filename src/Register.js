import React from "react";
import Nav from "./DesktopNav";
function Register() {
  return (
    <>
      <Nav />
      <div className="reg-con">
        <div className="login-container">
          <h1>Register</h1>
          <form className="">
            {/* <h5 align="left"> Name</h5> */}
            <input className="inp" type="text" placeholder="Name" />
            {/* <h5 align="left">Username</h5> */}
            <input className="inp" type="password" placeholder="Username" />
            {/* <h5 align="left">Institue</h5> */}
            <input className="inp" type="password" placeholder="Institute" />
            {/* <h5 align="left">Email</h5> */}
            <input className="inp" type="password" placeholder="Email" />
            {/* <h5 align="left">Password</h5> */}
            <input className="inp" type="password" placeholder="Password" />
            {/* <h5 align="left">Confirm Password</h5> */}
            <input
              className="inp"
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit" className="login_signin-btn">
              Create Your account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
