import React from "react";
import { Rating } from "@material-ui/lab";
import Nav from "./Navbar";
export default function Profile() {
  const style = {
    color: "red"
  };
  return (
    <>
      <Nav />
      <div className="profile">
        <img
          src="https://pbs.twimg.com/profile_images/1269641579494547457/rIyu37XA_400x400.jpg"
          alt="Avatar"
          className="avatar"
        />
        <div className="user-info">
          <h2>Saumya Garg</h2>
          <h5>
            <span style={style}>Username: </span>garg.saumya20
          </h5>
          <h5>
            <span style={style}>Email: </span> garg.saumya20@gmail.com
          </h5>
          <h5>
            <span style={style}>Institute: </span>Invertis University, Bareilly
          </h5>
          <h5>
            <span style={style}>Institute Rank: </span>2
          </h5>
          <h5>
            <span style={style}>Overall Rank: </span>10
          </h5>
          <h5>
            <span style={style}>Rating: </span>
            <Rating
              name="half-rating-read"
              defaultValue={3}
              precision={0.5}
              size="large"
              readOnly
            />
          </h5>
          {/* <Rating name="half-rating-read" size="large" defaultValue={2.5} precision={0.5} readOnly /> */}
        </div>
      </div>
    </>
  );
}
