export const allYgoCards = () => {
  return fetch("https://db.ygoprodeck.com/api/v6/cardinfo.php").then(resp => {
    return resp.json();
  });
};

// `https://db.ygoprodeck.com/api/v6/cardinfo.php`
