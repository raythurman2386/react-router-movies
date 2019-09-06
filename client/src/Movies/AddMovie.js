import React, { useState } from 'react'
import Axios from 'axios';

import '../index.css'

const AddMovie = (props) => {
  const [movie, setMovie] = useState({
    id: 6,
    title: "",
    director: "",
    metascore: "",
    stars: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({
      ...movie,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    Axios
      .post('http://localhost:5000/api/movies', movie)
      .then(res => {
        console.log(res)
        setMovie({ id: movie.id + 1, title: "", director: "", metascore: "", stars: [] })
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Add a movie</h2>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={movie.title}
          name="title"
          placeholder="Title"
          onChange={(event) => handleChange(event)}
          className="form-input"
        />
        <input
          type="text"
          value={movie.director}
          name="director"
          placeholder="Director"
          onChange={(event) => handleChange(event)}
          className="form-input"
        />
        <input
          type="text"
          value={movie.metascore}
          name="metascore"
          placeholder="Metascore"
          onChange={(event) => handleChange(event)}
          className="form-input"
        />
        <textarea
          type="text"
          value={movie.stars}
          name="stars"
          placeholder="Stars"
          className="form-input"
        />
        <button className="form-submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMovie
