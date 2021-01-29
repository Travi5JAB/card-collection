import React from "react"
import PropTypes from "prop-types"

// parts
import SingleCard from './SingleCard'

// fetches
import {singlePkCard} from '../../api/pokemon'

class PkmCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    this.cardDetailToggle = this.cardDetailToggle.bind(this);
  }

  cardDetailToggle(event) {
    const { detail } = this.state
    if(detail === true && event.target === event.currentTarget){
      singlePkCard(this.props.card.id).then(APIcard => {
        this.setState({ cardInfo: APIcard });
      });
      this.setState(prevState => ({
        detail: !prevState.detail
      }));
    }else if (detail === false){
      this.setState(prevState => ({
        detail: !prevState.detail
      }));
    }
  }

  render () {
    const { card } = this.props
    const { owned } = card
    const { detail } = this.state
    return (
      <div>
        {owned === "o" &&

        <div className="ownedCard" id="card">
          <a onClick={this.cardDetailToggle}>
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
        <a onClick={this.cardDetailToggle}>
          <img src={card.image_url}/>
          <div className="overlay" id="blackout">
            NP#: {card.national_pokedex_number}
            <br/>
            Name: {card.name}
            <br/>
            set: {card.set}
          </div>
          </a>
        </div>

        }
        { detail &&
          <div className="singleCardBackground" onClick={this.cardDetailToggle}>
            <SingleCard
              card = {card}
            />
          </div>
        }
      </div>
    );
  }
}

export default PkmCard
