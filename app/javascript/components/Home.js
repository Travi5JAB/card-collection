import React from "react"
import PropTypes from "prop-types"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home
