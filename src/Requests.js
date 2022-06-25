// typically we whould store in {process.env.API_KEY}


const requests ={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=3ae6811c10999aeccb10eaf50255957a`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/trending/all/week?with_networks=213&api_key=3ae6811c10999aeccb10eaf50255957a`,
    fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=3ae6811c10999aeccb10eaf50255957a&language=en-US&page=1`,
    fetchUpComingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=3ae6811c10999aeccb10eaf50255957a&language=en-US&page=1`,
    fetchTopRatedSeries: `https://api.themoviedb.org/3/tv/top_rated?api_key=3ae6811c10999aeccb10eaf50255957a&language=en-US&page=1`,
    fetchUpComingAll: `https://api.themoviedb.org/3/discover/tv?api_key=3ae6811c10999aeccb10eaf50255957a&with_networks=213`,
    fetchDiscoverMovies: `https://api.themoviedb.org/3/discover/movie?api_key=3ae6811c10999aeccb10eaf50255957a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchDiscoverSeries: `https://api.themoviedb.org/3/discover/tv?api_key=3ae6811c10999aeccb10eaf50255957a&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
}

export default requests