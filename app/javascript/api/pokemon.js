// pokemon cards

// all cards
export const allPokemonCards = (min,max) => {
  return fetch(`/pokemon_cards/all/${min}/${max}`).then(resp => {
    return resp.json();
    console.log(resp);
  });
};

// all cards
export const allPkCardsCount = () => {
  return fetch(`/pokemon_cards/all/count`).then(resp => {
    return resp.json();
    console.log(resp);
  });
};
