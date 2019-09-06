import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
    ))}
    <Link to="/"><div className="home-button">Home</div></Link>
    <Link to="/add"><div className="add-button">Add Movie</div></Link>
  </div>
);

export default SavedList;
