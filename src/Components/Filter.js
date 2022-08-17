import React from 'react'

function Filter({ filterByGenre, onFilterChange }) {

  const handleFilterChange = e => onFilterChange(e.target.value)

  return (
    <div>
        <select value={filterByGenre} onChange={handleFilterChange}>
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
