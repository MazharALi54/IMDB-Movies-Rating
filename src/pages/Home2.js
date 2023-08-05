import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../Components/MovieFolder/MovieList';
import TopRated from "../Components/MovieFolder/TopRated";
import Upcomming from '../Components/MovieFolder/Upcomming';

function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(response => response.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className='home'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    emulateTouch={true}
                    swipeable={true}
                    stopOnHover={false}
                >
                    {
                        popularMovies.map(movie => (
                            <div key={movie.id}>
                                <div className='position-relative'>
                                    <img className="img-fluid posterImage" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                    <div className='caption'>
                                        {movie ? movie.original_title : ""}<br />
                                        <p className='date'>{movie ? movie.release_date : ""}<span className='rating'><i className=" star fas fa-star fa-sm" style={{ color: "#f6c800" }} />{movie.vote_average}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <MovieList />
            <TopRated />
            <Upcomming />
        </>
    )
}

export default Home