import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
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
                <Link class="nav-link" to="/DSA">
                  DSA <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/leaderboard">
                  LeaderBoard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/liked">
                  Liked-Question
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="/signin">
                  Sign-in
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
