import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard({ title, genre, description }) {
  const [comments, setComments] = useState([])
  return (
    <div>
      <h3>{title}</h3>
      <p>{genre}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button>Mark as watched</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;