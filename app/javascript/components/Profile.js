import React from "react"
import PropTypes from "prop-types"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="profile">
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile