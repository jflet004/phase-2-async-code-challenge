import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react"


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => alert(error))
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieContainer movies={movies}/>}/>
        <Route path="/movies/new" element={<MovieForm/>}/>
      </Routes>
      
    </div>
  );
}

export default App;