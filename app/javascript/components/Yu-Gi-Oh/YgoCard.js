import React from "react"
import PropTypes from "prop-types"

class YgoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const { owned, id } = this.props.card
    return (
      <div>
        {owned === "o" &&

        <div className="ownedCard" id="card">
          <img src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1556795.jpg"/>
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
        <img src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1556795.jpg"/>
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

export default YgoCard
