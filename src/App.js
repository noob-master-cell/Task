import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import DashBoard from "./components/DashBoard";
import Register from "./components/Register";
import { ProtectedRoute } from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute exact path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
