import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{paddingLeft:"5px"}} to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="55" height="30" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/movies/popular">Popular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/top_rated">Top Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/upcoming">Upcoming</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

