import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RothCalculator from "./RothCalculator";
import Resources from "./Resources";

function Roth({ darkModeToggler }) {
  return (
    <>
      <Navbar darkModeToggler={darkModeToggler} />
      <Switch>
        <div className="container text-center">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <RothCalculator />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </div>
      </Switch>
    </>
  );
}

export default Roth;
