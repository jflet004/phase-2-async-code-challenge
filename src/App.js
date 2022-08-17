import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieContainer/>}/>
        <Route path="/movies/new" element={<MovieForm/>}/>
        {/* Add route "/movies", which renders <MovieContainer/>
        Add route "/movies/new", which renders <MovieForm/> */}
      </Routes>
      
    </div>
  );
}

export default App;