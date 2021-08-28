import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import list from "./list";
import DeleteIcon from "@material-ui/icons/Delete";
import Nav from "./Navbar";
// )

function Liked() {
  const renderlist = (topic, index) => {
    {
      return (
        <tr key={index}>
          <td className="clrt">1</td>
          <td className="clrt">Array</td>
          <td>
            <a href={topic.URL} target="blank" className="clrt">
              Move all the negative elements to one side of the array
            </a>
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
              <th>#</th>
              <th>Topic</th>
              <th>Liked Questions</th>
              <th>Code Editor</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="clrt">1</td>
              <td className="clrt">Array</td>
              <td>
                <a href="" target="blank" className="clrt">
                  Move all the negative elements to one side of the array
                </a>
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
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Liked;
