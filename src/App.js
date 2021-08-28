import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Navbar";
import Home from "./Home";
import DS from "./DS";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import Liked from "./Liked";
import Leaderboard from "./Leaderboard";
import Desktop from "./Desktop";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Desktop} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/DSA" component={Home} exact />
        <Route path="/Array" component={() => <DS topic="Array" />} />
        <Route
          path="/Linked List"
          component={() => <DS topic="LinkedList" />}
        />
        <Route
          path="/Binary Trees"
          component={() => <DS topic="Binary Trees" />}
        />
        <Route
          path="/BackTracking"
          component={() => <DS topic="BackTracking" />}
        />
        <Route path="/String" component={() => <DS topic="String" />} />
        <Route
          path="/Bit Manipulation"
          component={() => <DS topic="Bit Manipulation" />}
        />
        <Route
          path="/Dynamic Programming"
          component={() => <DS topic="Dynamic Programming" />}
        />
        <Route
          path="/Stacks & Queues"
          component={() => <DS topic="Stacks & Queues" />}
        />
        <Route path="/Heap" component={() => <DS topic="Heap" />} />
        <Route
          path="/Binary Search Tree"
          component={() => <DS topic="Binary Search Trees" />}
        />
        <Route
          path="/Binary Tree"
          component={() => <DS topic="Binary Trees" />}
        />
        <Route path="/Greedy" component={() => <DS topic="Greedy" />} />
        <Route path="/Graph" component={() => <DS topic="Graph" />} />
        <Route path="/Matrix" component={() => <DS topic="Matrix" />} />
        <Route
          path="/Searching & Sorting"
          component={() => <DS topic="Searching & Sorting" />}
        />
        <Route path="/profile">{Profile}</Route>
        <Route path="/signin">{Login}</Route>
        <Route path="/register">{Register}</Route>
        <Route path="/liked">{Liked}</Route>
        <Route path="/leaderboard">{Leaderboard}</Route>
      </Switch>
    </div>
  );
}

export default App;
