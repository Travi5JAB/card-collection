import React from "react"
import PropTypes from "prop-types"

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const { owned, id } = this.props.card
    console.log();
    return (
      <div>
        {owned === "o" &&

        <div className="ownedCard" id="card">
          <div className="overlay">
            ID: #{id}
            <br/>
            Name:
            <br/>
            Atk:
            <br/>
            Def:
            <br/>
            Location:
          </div>
        </div>

        ||

        <div className="unOwnedCard" id="card">
          <div className="overlay" id="blackout">
            ID: #{id}
            <br/>
            Name:
            <br/>
            Atk:
            <br/>
            Def:
          </div>
        </div>

        }
      </div>
    );
  }
}

export default Card
