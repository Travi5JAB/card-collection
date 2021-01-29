import React from "react"
import PropTypes from "prop-types"


class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ygoImgSrc: "https://i.redd.it/67u7dshy4vyz.jpg",
      pkmImgSrc: "https://cdn.bulbagarden.net/upload/1/17/Cardback.jpg",
      hover: false,
    };
  }

  onHoverYGO = () => {
    this.setState({hover: !this.state.hover})
    var image
    if (this.state.hover){
      image = "https://i.redd.it/67u7dshy4vyz.jpg"
      this.setState({ygoImgSrc: image})
    }else{
      image = "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1556795.jpg"
      this.setState({ygoImgSrc: image})
    }
  }

  onHoverPkm = () => {
    this.setState({hover: !this.state.hover})
    var image
    if (this.state.hover){
      image = "https://cdn.bulbagarden.net/upload/1/17/Cardback.jpg"
      this.setState({pkmImgSrc: image})
    }else{
      image = "https://images-na.ssl-images-amazon.com/images/I/51vmsCbLu9L._AC_.jpg"
      this.setState({pkmImgSrc: image})
    }
  }



  render () {
    const { ygoImgSrc, pkmImgSrc } = this.state
    return (
      <div className="collections">
        <h1>Collections</h1>
        <div className="content">

          <div className="section" id="yugiohSection" onMouseEnter={this.onHoverYGO} onMouseLeave={this.onHoverYGO}>
            <a href="/allcards/Yu-Gi-Oh!">
              <div className="image">
                <img className="image" src={ygoImgSrc}/>
              </div>
              <br/>
              Yu-Gi-Oh!
            </a>
          </div>

          <div className="section" id="pokemonSection" onMouseEnter={this.onHoverPkm} onMouseLeave={this.onHoverPkm}>
            <a href="/pokemon/allsets">
              <div className="image">
                <img className="image" src={pkmImgSrc}/>
              </div>
              <br/>
              Pokémon
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Collections
