import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fa500Px, FaSearch } from 'react-icons/fa'
const Taskbar = ({search,setSearch}) => {
  return (
    <div className="home">
        <div className="taskbar">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/post'>Post</NavLink>
          <NavLink to='/login'>User</NavLink>
        </div>
        <div className="symbol">
        <Fa500Px id='tube'/><h2 id='heading'>SK Media</h2>
        </div>
      <div className="search">
         <input type="search"
         value={search}
         placeholder='Search'
         required
         onChange={(e)=>setSearch(e.target.value)}
          />
         <FaSearch onClick={()=>alert(search)}/>
      </div>
       </div>
  )
}

export default Taskbar