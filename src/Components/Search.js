import React from 'react'

function Search({ search, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for movie by title"
        style={{ width: '250px' }}
        value={search}
        onChange={e => onSearch(e.target.value)}

      />
    </div>
  )
}

export default Search;
