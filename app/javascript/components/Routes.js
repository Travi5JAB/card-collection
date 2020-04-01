import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

////pages
import Cards from "./Cards"
import Collections from "./Collections"
import Home from "./Home"
import Profile from "./Profile"

function Routes() {
  return (
    <div className="content">
    <Router>
      <Route
        exact path="/"
        render={props => (
          <Home {...props} />
        )}
      />
      <Route
        exact path="/profile"
        render={props => (
          <Profile {...props} />
        )}
      />
      <Route
      exact path="/collections"
      render={props => (
        <Collections {...props} />
      )}
      />
      <Route
        exact path="/allcards/Yu-Gi-Oh!"
        render={props => (
          <Cards {...props} />
        )}
      />
    </Router>
    </div>
  );
}

export default Routes;
