import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import list from "./list";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Nav from "./Navbar";
// )

function DS(props) {
  console.log(props);
  const pr = props.topic;
  console.log(pr, "h");
  const { problems } = list;

  const renderlist = (topic, index) => {
    {
      if (topic.Topic === pr)
        return (
          <tr key={index}>
            <td className="clrt">{index + 1}</td>
            <td className="clrt">{topic.Topic}</td>
            <td>
              <a href={topic.URL} target="blank" className="clrt">
                {topic.Problem}
              </a>
            </td>
            <td>
              {" "}
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>
              <a
                href="https://ide.geeksforgeeks.org/"
                target="blank"
                className="clrt"
              >
                IDE
              </a>
            </td>
            <td>
              {" "}
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
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
              <th>S.No</th>
              <th>Topic</th>
              <th>Problem</th>
              <th>Status</th>
              <th>Code Editor</th>
              <th>
                <FavoriteIcon className="heart" />
              </th>
            </tr>
          </thead>
          <tbody>{problems.map(renderlist)}</tbody>
        </Table>

        <div className="footerwrap">
          <p className="foottxt">
            {" "}
            Designed and developed by Mr.Saumya Garg- All Rights Reserved ©2021{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default DS;
