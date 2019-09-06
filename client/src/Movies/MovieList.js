import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link style={linkStyle} to={`/movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} /></Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <>
      <MovieCard movie={movie} />
    </>
  );
}

export default MovieList;


const linkStyle = {
  textDecoration: "none",
  color: "black",
}