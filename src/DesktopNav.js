import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function DesktopNav() {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
          <nav class="navbar navbar-light bg-primary">
            <Link class="navbar-brand" to="/DSA">
              <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQHQe6gcLGNVHQ/company-logo_200_200/0/1606976176864?e=2159024400&v=beta&t=B-wMuzm2fYhy7vAe8zqsizzc7POfwdq6-cP1prHoQSw"
                width="50"
                height="50"
                alt=""
              />
            </Link>
          </nav>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ml-auto">
              <li class="nav-item ">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/signin">
                  Login <span class="sr-only"></span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Sign-up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About US
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default DesktopNav;
