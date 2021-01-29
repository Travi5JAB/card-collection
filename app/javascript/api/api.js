// `https://db.ygoprodeck.com/api/v6/cardinfo.php`

// user info

// profile page single user
export const singleUser = (unique_url) => {
  return fetch(`/user/single/${unique_url}`).then(resp => {
    return resp.json();
    console.log(resp);
  });
};
