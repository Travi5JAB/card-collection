import React from "react"
import PropTypes from "prop-types"

import Card from "./Card"

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [
        {id:1,owned:"o"},
        {id:2,owned:"n"},
        {id:3,owned:"n"},
        {id:4,owned:"o"},
        {id:5,owned:"o"},
        {id:6,owned:"n"},
        {id:7,owned:"o"},
        {id:8,owned:"o"},
        {id:9,owned:"o"},
        {id:10,owned:"n"},
        {id:11,owned:"n"},
        {id:12,owned:"o"},
        {id:13,owned:"o"},
        {id:14,owned:"n"},
        {id:15,owned:"o"}
      ]
    };
  }
  render () {
    const { allCards } = this.state
    let cards = allCards.map((card, index)=>{
      return(
        <Card
          key = {index}
          card = {card}
        />
      )
    });

    return (
      <div className="cards">
        <h1>Yu-Gi-Oh! Cards</h1>
        <div className="content">
          {cards}
        </div>
      </div>
    );
  }
}

export default Cards
