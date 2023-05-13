const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'ca0eb39f0b4f5e3535c0868d9a19c135',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
