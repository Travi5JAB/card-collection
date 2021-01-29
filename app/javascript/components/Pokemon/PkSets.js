import React from "react"
import PropTypes from "prop-types"

// fetches
import {getPkCardSets} from '../../api/pokemon'


// need to get card set images
class PkSets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    getPkCardSets().then(APIsets => {
      this.setState({ sets: APIsets });
    });
  }



  render () {
    const {sets} = this.state
    const allSets = sets.map((set,index) => {
      let setPage = `/pokemon/sets/${set}`
      return(
        <div className="set" key={set,index}>
          <a href={setPage}><p>{set}</p></a>
        </div>
      )
    })
    return (
      <div className="sets">
        <h1>Pokémon Sets</h1>
        <hr/>
        <div className="allSets">
          <div className="set">
            <a href='/allcards/Pokémon'><p>All</p></a>
          </div>
          {allSets}
        </div>
      </div>
    );
  }
}

export default PkSets
