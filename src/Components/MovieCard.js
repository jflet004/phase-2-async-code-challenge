import React from "react";
import { useState } from 'react'
import Comments from './Comments'
import "../Components/MovieCard.css"

function MovieCard({ title, genre, description, image, id, onUpdateWatchStatus, watched }) {
  const [comments, setComments] = useState([])
  const [isWatched, setIsWatched] = useState(watched)

  const handleClick = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ watched: !isWatched })
    })
      .then(response => response.json())
      .then((data) => { onUpdateWatchStatus(data) })
      .catch(error => alert(error))

    setIsWatched(!isWatched)
  }

  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="movie image"/>
      <p>{genre}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button onClick={handleClick} >{isWatched ? "✔️" : "Mark as watched"}</button>
      <Comments 
        comments={comments} 
        setComments={setComments}
      />
    </div>
  );
}

export default MovieCard;