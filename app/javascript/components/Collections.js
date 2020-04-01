import React from "react"
import PropTypes from "prop-types"


class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="collections">
        <h1>Collections</h1>
        <div className="content">

          <div className="section" id="yugiohSection">
            <a href="/allcards/Yu-Gi-Oh!">
              <div className="image"></div>
              <br/>
              Yu-Gi-Oh!
            </a>
          </div>

          <div className="section" id="pokemonSection">
            <a href="">
              <div className="image">Coming Soon</div>
              <br/>
              Pokémon
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Collections
