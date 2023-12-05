import React from 'react'

const SearchBar = () => {
  return (
   <div className="searchBar">
    <input type="search" placeholder='Search...' className='searchBarInput' />
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
   </div>
  )
}

export default SearchBar