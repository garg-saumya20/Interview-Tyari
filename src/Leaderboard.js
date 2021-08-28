import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Nav from "./Navbar";
// )

function Leaderboard() {
  const renderlist = (topic, index) => {
    {
      return (
        <tr key={index}>
          <td className="clrt">Username</td>
          <td className="clrt">Rank</td>
          <td className="clrt">Score</td>

          <td>
            <DeleteIcon />
          </td>
        </tr>
      );
    }
  };
  return (
    <>
      <Nav />
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr data-href="www.google.com">
              <th>Username</th>
              <th>
                <label for="cars">Overall Rank</label>
              </th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <Link to="/profile">
              <td className="clrt">@garg.saumya20</td>
            </Link>
            <td className="clrt">2</td>
            <td className="clrt">50</td>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Leaderboard;
