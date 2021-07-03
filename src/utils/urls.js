
const API_ROOT = 'https://api.giphy.com/v1/gifs/search?api_key=c8JBlm1edLuhGu0SfBVDdVM0cnTJYHS7&limit=10&q=';
// Currently fetching only 10 gifs
const APIUrls = {
  gifFetch: (text) => `${API_ROOT}${text}`,
};
export default APIUrls;