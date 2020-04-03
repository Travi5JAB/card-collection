import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

////pages
import Collections from "./Collections"
import Home from "./Home"
import PkmCards from "./PkmCards"
import Profile from "./Profile"
import YgoCards from "./YgoCards"

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
          <YgoCards {...props} />
        )}
      />
      <Route
        exact path="/allcards/Pokémon"
        render={props => (
          <PkmCards {...props} />
        )}
      />
    </Router>
    </div>
  );
}

export default Routes;
