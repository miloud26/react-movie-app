const apiConfig = {
  search_api:
    "https://api.themoviedb.org/3/search/movie?api_key=eb0163393170b1c64bc86741884ec79a&query=",
  trending_api:
    "https://api.themoviedb.org/3/trending/all/day?api_key=eb0163393170b1c64bc86741884ec79a",
  single_movie: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=eb0163393170b1c64bc86741884ec79a`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  video_api: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=eb0163393170b1c64bc86741884ec79a`,
};

export default apiConfig;
