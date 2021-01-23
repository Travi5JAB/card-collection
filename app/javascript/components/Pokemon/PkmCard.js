import React from "react"
import PropTypes from "prop-types"

class PkmCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    this.handleDropClick = this.handleDropClick.bind(this);
  }

  handleDropClick() {
    this.setState(prevState => ({
      detail: !prevState.detail
    }));
    console.log("clicked");
  }

  render () {
    const { card } = this.props
    const { owned } = card
    return (
      <div>
        {owned === "o" &&

        <div className="ownedCard" id="card">
          <a onClick={this.handleDropClick}>
            <img src={card.image_url}/>
            <div className="overlay">
              NP#: {card.national_pokedex_number}
              <br/>
              Name: {card.name}
              <br/>
              Location:
            </div>
          </a>
        </div>

        ||

        <div className="unOwnedCard" id="card">
        <img src={card.image_url}/>
          <div className="overlay" id="blackout">
            NP#: {card.national_pokedex_number}
            <br/>
            Name: {card.name}
            <br/>
          </div>
        </div>

        }
      </div>
    );
  }
}

export default PkmCard
