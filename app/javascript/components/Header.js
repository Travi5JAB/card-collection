import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {

    const {
      current_user,
      edit_user,
      logged_in,
      sign_in,
      sign_out
    } = this.props

    return (
      <div className="header">
        <div className="navLinks">
          <a
            className="navBtn"
            href="/"
          >
            Home
          </a>
          <a
            className="navBtn"
            href="/profile"
            id="profileBtn"
          >
            Profile
          </a>
          <a
            className="navBtn"
            href="/collections"
          >
            Collections
          </a>
          <a
            className="navBtn"
            href={edit_user}
          >
            Settings
          </a>
          {logged_in &&
            <a
              className="navBtn"
              href={sign_out}
            >
              Sign Out
            </a>
            ||
            <a
              className="navBtn"
              href={sign_in}
            >
              Sign in
            </a>
          }
        </div>
        <div className="username">
          {current_user.username}
        </div>
      </div>
    );
  }
}

export default Header
