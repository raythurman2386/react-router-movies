import React, { useState } from 'react';
import { Route } from 'react-router-dom'

// Components
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import AddMovie from './Movies/AddMovie'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    (!savedList.includes(movie)) &&
      setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
      <Route path="/add" component={AddMovie} />
    </div>
  );
};

export default App;
