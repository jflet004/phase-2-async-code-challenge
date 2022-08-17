import React from 'react'

function Filter({ filterByGenre, onFilterChange }) {
  return (
    <div>
      <select value={filterByGenre} onChange={e => onFilterChange(e.target.value)}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>
    </div>
  )
}

export default Filter;
