import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Component/nav";
import Add from "./Component/add";
import List from "./Component/list";
import Raiting from "./Component/raiting";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Movielist from "./Component/Movielist";
// import 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Add />
        <Raiting />
        <List />
        {/* <Route path="/Movielist" component={Movielist}></Route> */}

        {/* <Route path="/Movielist" render={() => <Movielist />} /> */}
      </Router>
    </div>
  );
}

export default App;
