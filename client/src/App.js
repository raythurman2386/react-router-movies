import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'

// Components
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import AddMovie from './Movies/AddMovie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
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
  }, [movies]);

  const addToSavedList = movie => {
    (!savedList.includes(movie)) &&
      setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact
        path="/"
        render={
          (props) =>
            <MovieList
              {...props}
              movies={movies}
            />
        }
      />
      <Route exact path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
      <Route path="/add" render={props => <AddMovie {...props} movies={movies} />} />
    </div>
  );
};

export default App;
