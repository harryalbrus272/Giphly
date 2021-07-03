const giphyKey = process.env.REACT_APP_GIPHY_KEY;
const API_ROOT =
  `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=10&q=`;
// Currently fetching only 10 gifs
const APIUrls = {
  gifFetch: (text) => `${API_ROOT}${text}`,
};
export default APIUrls;
