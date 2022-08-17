import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Welcome to Watchlist!</h1>
        <Link to="/movies" exact>Movie List</Link><br/>
        <Link to="/movies/new" exact>Add Movie</Link>
    </div>
    
  )
}
