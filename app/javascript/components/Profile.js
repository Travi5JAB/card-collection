import React from "react"
import PropTypes from "prop-types"

// fetches
import { singleUser } from '../api/api'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      collections: []
    };
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    const {unique_url} = this.props.match.params
    singleUser(unique_url).then(APIuser => {
      this.setState({ user: APIuser });
    });
  }

  addCollection(){
    console.log("clicked");
  }

  render () {
    const { user,collections } = this.state
    const {current_user} = this.props
    return (
      <div className="profile">
        <div className="userInfo">
          <div className="profilePic">
            <img src=''/>
          </div>
          <div className="name">
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
          </div>
          { user.id == current_user.id &&
            <p className="email">{user.email}</p>
          }
        </div>
        <hr/>
        <div className="collectionsInfo">
          <h2>Collections</h2>
          {collections.length > 0 &&
            <div className="allCollections">
              all collections go here
              <button onClick={this.addCollection}>✚</button>
            </div>
            ||
            <div className="noCollections">
              <button onClick={this.addCollection}>✚</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Profile
