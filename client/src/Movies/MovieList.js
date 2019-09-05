import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])

  // useEffect to get initial list
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  // useEffect to send a new movie
  useEffect(() => {
    const addMovie = () => {
      axios
        .post('http://localhost:5000/api/movies',
          {
            id: 6,
            title: "Armagedon",
            director: "Bob Dole",
            metascore: 12,
            start: [
              "Don Whitely",
              "Ray Thurman",
              "Nick Durbin"
            ]
          }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  })

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} /></Link>
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
