import React from 'react'
import Nav from './Nav';
import { Fa500Px, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Postpage from '../Postpage';
const Home = ({items,search,setSearch}) => {
  return (
    <>
      <div className="home">
        <header className="taskbar">
          <Link to='/'>Home</Link>
          <Link to='/post'>Post</Link>
          <Link to='/login'>User</Link>
        </header>
        <menu className="symbol">
        <Fa500Px id='tube'/><h2 id='heading'>SK Media</h2>
        </menu>
         <footer className="search">
            <input type="search"
            value={search}
            placeholder='Search'
            required
            onChange={(e)=>setSearch(e.target.value)}
            
              />
            <FaSearch onClick={()=>alert(search)}/>
          </footer>
       </div>
       <div className="content">
            {items.map(item => {
              return ( 
                <Postpage item={item} />
              )
               
            })}
       </div>
       <div className="empty"></div>
       <footer className="nav">
          <Nav/>
       </footer>
    </>
  )
}

export default Home