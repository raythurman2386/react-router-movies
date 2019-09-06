import React, { useState } from 'react'

const AddMovie = (props) => {
  const [movie, setMovie] = useState({
    id: props.movies.length + 1,
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
    console.log(movie);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={movie.title}
          name="title"
          placeholder="Title"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          value={movie.director}
          name="director"
          placeholder="Director"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          value={movie.metascore}
          name="metascore"
          placeholder="Metascore"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddMovie
