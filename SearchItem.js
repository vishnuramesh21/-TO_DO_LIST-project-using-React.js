import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
 <form className='searchForm' onSumbit={(e)=>
    e.preventDefault()}>
        <label htmlfor="search">Search</label>
     <input 
     type="text"
     id='search'
     roll='searchBox'
     placeholder='Search Items'
     value={search}
     onChange={(e)=>setSearch(e.target.value)}

     />
        </form>
    
  )
}

export default SearchItem