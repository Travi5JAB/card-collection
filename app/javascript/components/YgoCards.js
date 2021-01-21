import React from "react"
import PropTypes from "prop-types"

import YgoCard from "./YgoCard"

// import { allYgoCards } from "../api/api"

class YgoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [],
      allCardsTest:[]
    };
  }

  // componentDidMount() {
  //   this.fetchData();
  // }
  // fetchData() {
  //   allYgoCards().then(APIcards => {
  //     this.setState({ allCards: APIcards });
  //     console.log(this.state.allCards);
  //   });
  // }

  render () {
    const { allCards } = this.state
    let cards = allCards.map((card, index)=>{
      return(
        <YgoCard
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

export default YgoCards
