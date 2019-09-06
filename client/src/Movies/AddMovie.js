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
    console.log(movie.title);
  };

  return (
    <div>
      <form>
        <input type="text" value={movie.title} name="title" placeholder="Title" handleChange={(event) => handleChange(event)} />
      </form>
    </div>
  )
}

export default AddMovie
