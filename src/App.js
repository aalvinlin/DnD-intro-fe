import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "./App.css";

const App = () => {

  return (
    <>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/character_sheet">
          <Signup />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </>
  );
}

export default App;