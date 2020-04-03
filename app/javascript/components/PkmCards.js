import React from "react"
import PropTypes from "prop-types"

import PkmCard from "./PkmCard"

class PkmCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [
        {id:1,owned:"n"},
        {id:2,owned:"n"},
        {id:3,owned:"n"},
        {id:4,owned:"o"},
        {id:5,owned:"o"},
        {id:6,owned:"n"},
        {id:7,owned:"o"},
        {id:8,owned:"n"},
        {id:9,owned:"o"},
        {id:10,owned:"n"},
        {id:11,owned:"n"},
        {id:12,owned:"o"},
        {id:13,owned:"o"},
        {id:14,owned:"o"},
        {id:15,owned:"o"}
      ]
    };
  }

  render () {
    const { allCards } = this.state
    let cards = allCards.map((card, index)=>{
      return(
        <PkmCard
          key = {index}
          card = {card}
        />
      )
    });

    return (
      <div className="cards">
        <h1>Pokémon Cards</h1>
        <div className="content">
          {cards}
        </div>
      </div>
    );
  }
}

export default PkmCards
