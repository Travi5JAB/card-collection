import React from "react"
import PropTypes from "prop-types"


// parts
import Routes from "./Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render () {
    const {current_user} = this.props
    return (
      <div className="app">
        <div className="wrapper">
          <Routes
            current_user = {current_user}
          />
          <div className="base"></div>
        </div>
      </div>
    );
  }
}

export default App
