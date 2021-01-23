import React from "react"
import PropTypes from "prop-types"

// parts
import PkmCard from "./PkmCard"
import PageTurner from "../parts/Pagination"

// fetches
import {
  allPokemonCards,
  allPkCardsCount
} from '../../api/pokemon'

class PkmCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [],
      count: 0,
      page: 1,
      cardsCount: 0
    };
    this.pageChange = this.pageChange.bind(this)
  }

  componentDidMount(){
    this.fetchData(1,50);
    allPkCardsCount().then(APItotal => {
      this.setState({ cardsCount: APItotal });
      let maxBtnNum = Math.ceil(APItotal/50)
      this.setState({count:maxBtnNum})
    });
  }

  fetchData(min,max){
    allPokemonCards(min,max).then(APIcards => {
      this.setState({ allCards: APIcards });
    });
  }

  pageChange(pageNum){
    const { page } = this.state
    this.setState({page:pageNum})
    let min = 1 + 50 * (pageNum - 1)
    let max = pageNum * 50
    this.fetchData(min,max)
  }


  render () {
    const { allCards, count, page } = this.state
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
        <PageTurner
          count={count}
          page={page}
          pageChange={this.pageChange}
        />
        <div className="content">
          <div className="pokemonCard" id="cardDetail"></div>
          {cards}
        </div>
      </div>
    );
  }
}

export default PkmCards
