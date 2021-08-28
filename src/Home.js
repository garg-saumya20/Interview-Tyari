import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import DS from "./DS";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import Nav from "./Navbar";
function Home() {
  const bgcolor = "green";

  const list = [
    {
      Serial: "1",
      Topic: "Array",
      Status: "34",
      TQ: "36"
    },

    {
      Serial: "2",
      Topic: "Matrix",
      Status: "34",
      TQ: "10"
    },

    {
      Serial: "3",
      Topic: "String",
      Status: "34",
      TQ: "43"
    },

    {
      Serial: "4",
      Topic: "Searching & Sorting",
      Status: "34",
      TQ: "36"
    },

    {
      Serial: "5",
      Topic: "Linked List",
      Status: "0",
      TQ: "36"
    },

    {
      Serial: "6",
      Topic: "Binary Tree",
      Status: "34",
      TQ: "35"
    },

    {
      Serial: "7",
      Topic: "Binary Search Tree",
      Status: "34",
      TQ: "22"
    },

    {
      Serial: "8",
      Topic: "Greedy",
      Status: "34",
      TQ: "35"
    },

    {
      Serial: "9",
      Topic: "Backtracking",
      Status: "34",
      TQ: "19"
    },

    {
      Serial: "10",
      Topic: "Stacks & Queues",
      Status: "34",
      TQ: "38"
    },

    {
      Serial: "11",
      Topic: "Heap",
      Status: "34",
      TQ: "18"
    },

    {
      Serial: "12",
      Topic: "Graph",
      Status: "35",
      TQ: "44"
    },

    {
      Serial: "13",
      Topic: "Dynamic Programming",
      Status: "34",
      TQ: "60"
    },

    {
      Serial: "14",
      Topic: "Bit Manipulation",
      Status: "0",
      TQ: "10"
    }
  ];

  const renderlist = (topic, index) => {
    return (
      <tr key={index}>
        <td className="clr">{topic.Serial}.</td>
        <td>
          <Link to={topic.Topic} className="clr">
            {topic.Topic}
          </Link>{" "}
        </td>
        <td className="clr">{topic.Status}</td>
        <td className="clr">{topic.TQ}</td>
        <td>
          {" "}
          <ProgressBar
            striped
            variant="success"
            key={index}
            animated
            now={((topic.TQ - topic.Status) * 100) / topic.TQ}
          />
        </td>
      </tr>
    );
  };
  return (
    <>
      <Nav />
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Data Structure</th>
              <th>Remaining</th>
              <th>Total Questions</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>{list.map(renderlist)}</tbody>
        </Table>
      </div>
      <div className="footerwrap">
        <p className="foottxt">
          {" "}
          Designed and developed by Mr.Saumya Garg- All Rights Reserved ©2021{" "}
        </p>
        <a href="https://www.instagram.com/garg.saumya20/" className="social">
          {" "}
          <InstagramIcon className="insta" />
        </a>
        <LinkedInIcon className="linkedin" />
        <GitHubIcon className="github" />
        <MailIcon className="mail" />
      </div>
    </>
  );
}

export default Home;
