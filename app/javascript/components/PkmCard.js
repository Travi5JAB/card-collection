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
    const { owned, id } = this.props.card
    return (
      <div>
        {owned === "o" &&

        <div className="ownedCard" id="card">
          <a onClick={this.handleDropClick}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51vmsCbLu9L._AC_.jpg"/>
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
          </a>
        </div>

        ||

        <div className="unOwnedCard" id="card">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51vmsCbLu9L._AC_.jpg"/>
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

export default PkmCard
