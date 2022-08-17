import React from "react";
import { useState } from 'react'
import Comments from './Comments'
import "../Components/MovieCard.css"

function MovieCard({ title, genre, description, image }) {
  const [comments, setComments] = useState([])
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="movie image" />
      <p>{genre}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default MovieCard;