export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CRETAE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
