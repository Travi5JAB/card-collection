import React from "react"
import PropTypes from "prop-types"

// fetches
import {
  getPkCardsBySet,
  setPkCardsCount
} from "../../api/pokemon"

// parts
import PkmCard from "./PkmCard"
import PageTurner from "../parts/Pagination"

class PkCardsBySet extends React.Component {
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
    const {set} = this.props.match.params
    this.fetchData(1,50)
    setPkCardsCount(set).then(APItotal => {
      this.setState({ cardsCount: APItotal });
      let maxBtnNum = Math.ceil(APItotal/50)
      this.setState({count:maxBtnNum})
    });
  }
  fetchData(min,max){
    const {set} = this.props.match.params
    getPkCardsBySet(set,min,max).then(APIcards => {
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
    const {allCards, count, page} = this.state
    const cards = allCards.map((card,index) => {
      return(
        <PkmCard
          key = {index}
          card = {card}
        />
      )
    })
    return (
      <div className="pkCardsBySet cards">
      {allCards.length > 0 &&
        <h1>Pokémon Cards/ Set {allCards[0].set}</h1>
      }
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

export default PkCardsBySet
