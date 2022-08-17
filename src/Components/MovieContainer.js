import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies, filterByGenre, onFilterChange, search, onSearch, onUpdateWatchStatus, onDeleMovie }) {

  const movieList = movies.map(movie =>
    <MovieCard
      key={movie.id}
      onUpdateWatchStatus={onUpdateWatchStatus}
      onDeleteMovie={onDeleMovie}
      {...movie}
    />)

  return (
    <div>
      <h1>Watchlist</h1>
      <Search
        search={search}
        onSearch={onSearch}
      /><br />
      <Filter
        filterByGenre={filterByGenre}
        onFilterChange={onFilterChange}
      />
      {movieList}
    </div>
  );
}

export default MovieContainer;
