import React, { useState } from "react";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const handleMovieSubmit = e => {
    e.preventDefault()
    
    const movieObj = {
      title,
      description,
      genre,
      image
    }

    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movieObj)
    })
      .then(response => response.json())
      .then(data => onAddMovie(data))
      .catch(error => alert(error))

    setTitle("")
    setGenre("")
    setImage("")
    setDescription("")

  }

  return (
    <form
      className="new-movie-form"
      onSubmit={handleMovieSubmit}
    >
      <h3>Add Movie</h3>
      <input
        placeholder="Title"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)} /><br />
      <select name="genre" value={genre} onChange={e => setGenre(e.target.value)}>
        <option value="" disabled selected>Select Genre:</option>
        <option>Action</option>
        <option>Horror</option>
        <option>Drama</option>
        <option>Comedy</option>
      </select><br />
      <label>Watched?
        <input
          type="checkbox"
          name="genre"
        />
      </label><br />
      <input
        placeholder="Image"
        name="image"
        value={image}
        onChange={e => setImage(e.target.value)}
      /><br />
      <textarea p
        laceholder="Description"
        rows={10}
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      /><br />
      <input
        type="submit"
        value="Add Movie"
      />
    </form>
  );
}

export default MovieForm;
