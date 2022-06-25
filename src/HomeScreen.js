import React from 'react'
import Nav from "./Nav";
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div>
            <Nav/>
            

            <Banner/>
            <Row
            title="NETFLIX ORININALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
             />
            
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
            <Row title="Up Coming Movies" fetchUrl={requests.fetchUpComingMovies}/>
            <Row title="Top Rated Series" fetchUrl={requests.fetchTopRatedSeries}/>
            <Row title="Up Coming All" fetchUrl={requests.fetchUpComingAll}/>
            <Row title="Discover Movies" fetchUrl={requests.fetchDiscoverMovies}/>
            <Row title="Discover Series" fetchUrl={requests.fetchDiscoverSeries}/>

            

        </div>
    )
}

export default HomeScreen
