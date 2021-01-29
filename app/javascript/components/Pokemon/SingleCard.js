import React from "react"
import PropTypes from "prop-types"

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: {}
    };
  }


  render () {
    const { cardInfo } = this.state
    const { card } = this.props
    const {attacks,weaknesses,resistances,retreat_cost} = card

    // retreat cost and types and cost for attacks loop

    var attacksLoop = attacks.map((attack,index) => {
      return(
        <div id="loop" className="attack" key={attack,index}>
          <div className="atkInfo" id="loopInfo">
            <h5 id="margLeft5">Name:</h5>
            <p id="margLeft10">{attack.name}</p>
          </div>
          <div className="atkInfo" id="loopInfo">
            <h5 id="margLeft5">Cost:</h5>
            <p id="flex">
              {attack.cost.map((energy,index) => {
                return(
                  <div key={energy,index} className="energy">
                    {energy}
                  </div>
                )
              })}
            </p>
          </div>
          <div className="atkInfo" id="loopInfo">
            <h5 id="margLeft5">Damage:</h5>
            <p id="margLeft10">{attack.damage}</p>
          </div>
          <div className="atkInfo" id="loopInfo">
            <h5 id="margLeft5">Text:</h5>
            <p id="margLeft10">{attack.text}</p>
          </div>
        </div>
      )
    })
    var weaknessesLoop = weaknesses.map((weakness,index) => {
      return(
        <div id="loop" className="weakness" key={weakness,index}>
          <div className="defInfo" id="loopInfo">
            <h5 id="margLeft5">Type:</h5>
            <p>{weakness.type}</p>
          </div>
          <div className="defInfo" id="loopInfo">
            <h5 id="margLeft5">Value:</h5>
            <p>{weakness.value}</p>
          </div>
        </div>
      )
    })
    var resistancesLoop = resistances.map((resistance,index) => {
      return(
          <div id="loop" className="resistance" key={resistance,index}>
            <div className="resInfo" id="loopInfo">
              <h5 id="margLeft5">Type:</h5>
              <p>{resistance.type}</p>
            </div>
            <div className="resInfo" id="loopInfo">
              <h5 id="margLeft5">Value:</h5>
              <p>{resistance.value}</p>
            </div>
          </div>
      )
    })

    var retreatCostLoop = retreat_cost.map((energy,index) => {
      return(
        <div key={energy,index} className="energy">
          {energy}
        </div>
      )
    })
    return (
      <div className="singlePkCardDetails">
        <div className="cardImage">
          <img src={card.image_url}/>
        </div>

        <div className="top">
          {card.name !== null &&
            <div id="info">
              <h5>Card Name:</h5>
              <p>{card.name}</p>
            </div>
          }

          {card.hp !== null &&
            <div id="info">
              <h5>{card.hp}HP</h5>
            </div>
          }

          {card.rarity !== null &&
            <div id="info">
              <h5>Rarity:</h5>
              <p>{card.rarity}</p>
            </div>
          }

          {card.series !== null &&
            <div id="info">
              <h5>Series:</h5>
              <p>{card.series}</p>
            </div>
          }

          {card.set !== null &&
            <div id="info">
              <h5>Set:</h5>
              <p>{card.set}</p>
            </div>
          }

          {card.national_pokedex_number !== null &&
            <div id="info">
              <h5>NP#:</h5>
              <p>{card.national_pokedex_number}</p>
            </div>
          }

          {card.evolves_from !== null &&
            <div id="info">
              <h5>Evolves From: </h5>
              <p>{card.evolves_from}</p>
            </div>
          }
        </div>

        <div className="topRight">
          <button>I own this card</button>
          <p>Own #:</p>
          <p>Location:</p>
        </div>

        <div className="bottom">

          {card.attacks.length !== 0 &&
            <div className="attackChoices">
              <h4>Attacks:</h4>
              {card.attacks.length == 1 &&
                <div className="oneOfOne">
                  {attacksLoop}
                </div>
              }
              {card.attacks.length == 2 &&
                <div className="oneOfTwo">
                  {attacksLoop}
                </div>
              }
              {card.attacks.length == 3 &&
                <div className="oneOfThree">
                  {attacksLoop}
                </div>
              }
            </div>
          }

          {card.weaknesses.length !== 0 &&
            <div className="weaknessLoop">
              <h5>Weaknesses:</h5>
              {card.weaknesses.length == 1 &&
                <div className="oneOfOne">
                  {weaknessesLoop}
                </div>
              }
              {card.weaknesses.length == 2 &&
                <div className="oneOfTwo">
                  {weaknessesLoop}
                </div>
              }
              {card.weaknesses.length == 3 &&
                <div className="oneOfThree">
                  {weaknessesLoop}
                </div>
              }
            </div>
          }

          {card.resistances.length !== 0 &&
            <div>
              <h5>Resistances:</h5>
              {card.resistances.length == 1 &&
                <div className="oneOfOne">
                  {resistancesLoop}
                </div>
              }
              {card.resistances.length == 2 &&
                <div className="oneOfTwo">
                  {resistancesLoop}
                </div>
              }
              {card.resistances.length == 3 &&
                <div className="oneOfThree">
                  {resistancesLoop}
                </div>
              }
            </div>
          }

          {card.ability !== null &&
            <div>
              <h5>Ability:</h5>
              <div className="ability">
                <div id="info">
                  <h5 id="margLeft5">Name:</h5>
                  <p>{card.ability.name}</p>
                </div>
                <div id="info">
                  <h5 id="margLeft5">Text:</h5>
                  <p>{card.ability.text}</p>
                </div>
                <div id="info">
                  <h5 id="margLeft5">Type:</h5>
                  <p>{card.ability.type}</p>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="cardInfoBase">
          {card.ancient_trait !== null &&
            <div id="info" className="ancientTrait">
              <h5>Ancient Trait:</h5>
              <p>{card.ancient_trait}</p>
            </div>
          }

          {card.card_id !== null &&
            <div id="info" className="cardId">
              <h5>Card Id:</h5>
              <p>{card.card_id}</p>
            </div>
          }

          {card.number !== null &&
            <div id="info" className="number">
              <h5>number:</h5>
              <p>{card.number}</p>
            </div>
          }

          {card.set_code !== null &&
            <div id="info" className="setCode">
              <h5>Set Code:</h5>
              <p>{card.set_code}</p>
            </div>
          }

          {card.subtype !== null &&
            <div id="info" className="subType">
              <h5>Subtype:</h5>
              <p>{card.subtype}</p>
            </div>
          }

          {card.supertype !== null &&
            <div id="info" className="superType">
              <h5>Supertype:</h5>
              <p>{card.supertype}</p>
            </div>
          }

          {card.retreat_cost !== null &&
            <div id="info" className="retreatCost">
              <h5>Retreat Cost:</h5>
              <p id="flex">{retreatCostLoop}</p>
            </div>
          }

          {card.converted_retreat_cost !== null &&
            <div id="info" className="convertedRetreatCost">
              <h5>Converted Retreat Cost:</h5>
              <p>{card.converted_retreat_cost}</p>
            </div>
          }

          {card.text !== null &&
            <div id="info" className="text">
              <h5>Text:</h5>
              <p>{card.text}</p>
            </div>
          }

          {card.types !== null &&
            <div id="info" className="types">
              <h5>types:</h5>
              <p>{card.types}</p>
            </div>
          }

          {card.artist !== null &&
            <div id="flex" className="artist">
              <h5>artist:</h5>
              <p id="margLeft5">{card.artist}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default SingleCard
