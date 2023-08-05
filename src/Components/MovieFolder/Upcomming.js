import React, { useState, useEffect } from 'react';
import Card from "../CardFolder/Card";
import "./MovieList.css"
import { useParams } from "react-router-dom";

export function Upcomming() {
    const [movieList, setmovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setmovieList(data.results))
    }
    return (
        <div className='movie__list'>
            <h2 className="list_title">Upcomming</h2>
            
            <div className=' list_card'>
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Upcomming