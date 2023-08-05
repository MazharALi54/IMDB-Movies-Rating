import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css"

function Card({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className='card'>
                <img className='card__img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div className='card__overlay'>
                    <div className='card__title'>
                        {movie.original_title}
                    </div>
                    <div className='card__runtime'>
                        {movie ? movie.release_date : ""}
                        <span className="card__rating">
                            <i className="star fas fa-star fa-sm" style={{ color: "#f6c800" }} />
                            {movie ? movie.vote_average : ""}
                        </span>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card