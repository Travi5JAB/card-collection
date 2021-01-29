// pokemon cards

// all cards
export const allPokemonCards = (min,max) => {
  return fetch(`/pokemon_cards/all/${min}/${max}`).then(resp => {
    return resp.json();
  });
};

// all cards count
export const allPkCardsCount = () => {
  return fetch(`/pokemon_cards/all/count`).then(resp => {
    return resp.json();
  });
};

// SingleCard
export const singlePkCard = (id) => {
  return fetch(`/pk_cards/${id}`).then(resp => {
    return resp.json();
  });
};

// sets
// pkcards by set
export const getPkCardsBySet = (set,min,max) => {
  return fetch(`/pokemon_cards/sets/${set}/${min}/${max}`).then(resp => {
    return resp.json();
  });
};

// all sets
export const getPkCardSets = () => {
  return fetch(`/pokemon_cards/sets`).then(resp => {
    return resp.json();
  });
};

// set cards count
export const setPkCardsCount = (set) => {
  return fetch(`/pokemon_cards/${set}/count`).then(resp => {
    return resp.json();
  });
};
