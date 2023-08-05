import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'

export default function MovieDetail() {
    const [MovieDetail, setMovieDetail] = useState()
    const { id } = useParams()
    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setMovieDetail(data))
    }

    return (
        <div className='container'>
            <div className='row movieBanner'>
                <img className='img-fluid banner' src={`https://image.tmdb.org/t/p/original${MovieDetail ? MovieDetail.backdrop_path : ""}`} />
            </div>
            <div className='row details'>
                <div className='left col-sm-6'>
                    <div className="movieName">{MovieDetail ? MovieDetail.original_title : ""}</div>
                    <span className="tagline">{MovieDetail ? MovieDetail.tagline : ""}</span>
                    <div>{MovieDetail ? MovieDetail.overview : ""}</div>
                </div>
                <div className='right col-sm-offset-1 col-sm-5'>
                    <div className="Genres">
                        {
                            MovieDetail && MovieDetail.genres
                                ?
                                MovieDetail.genres.map(genre => (
                                    <><span className="genre" style={{ display: "inline-block" }} id={genre.id}>{genre.name}</span></>
                                ))
                                :
                                ""
                        }
                    </div>
                    <div className="movieRating">
                        {MovieDetail ? MovieDetail.vote_average : ""} <i class="fas fa-star" style={{ color: "#f6c800" }} />
                        <span className="voteCount">{MovieDetail ? "(" + MovieDetail.vote_count + ") votes" : ""}</span>
                    </div>
                    <div className="movie_runtime">{MovieDetail ? MovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie_releaseDate">{MovieDetail ? MovieDetail.release_date : ""}</div>
                    
                </div>
            </div>
        </div>
    )
}
