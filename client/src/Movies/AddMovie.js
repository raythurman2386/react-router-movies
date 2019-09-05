import React, { useState } from 'react'

const AddMovie = (props) => {
  const [movie, setMovie] = useState({
    id: props.movies.length + 1,
    title: "",
    director: "",
    metascore: "",
    stars: [],
  })

  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title" />
      </form>
    </div>
  )
}

export default AddMovie
