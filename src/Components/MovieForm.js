import React, { useState } from "react";

function MovieForm() {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  return (
    <form className="new-movie-form">
        <h3>Add Movie</h3>
      <input placeholder="Title" name="title"/><br/>
      <select name="genre">
        <option value="" disabled selected>Select Genre:</option>
      <option>Action</option>
      <option>Horror</option>
      <option>Drama</option>
      <option>Comedy</option>
      </select><br/>
      <label>Watched?
      <input type="checkbox" name="genre"/>
      </label><br/>
      <input placeholder="Image" name="image"/><br/>
      <textarea placeholder="Description" rows={10} name="description"/><br/>
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;
