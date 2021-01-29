import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

////pages
import Collections from "./Collections"
import Home from "./Home"
import PkmCards from "./Pokemon/PkmCards"
import PkSets from "./Pokemon/PkSets"
import PkCardsBySet from "./Pokemon/PkCardsBySet"
import Profile from "./Profile"
import YgoCards from "./Yu-Gi-Oh/YgoCards"

function Routes({current_user}) {
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
        path="/pokemon/allsets"
        render={props => (
          <PkSets {...props} />
        )}
      />
      <Route
        path="/pokemon/sets/:set"
        render={props => (
          <PkCardsBySet {...props} />
        )}
      />
      <Route
        exact path="/profile/:unique_url"
        render={props => (
          <Profile {...props} current_user={current_user}/>
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
