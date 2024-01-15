import React from 'react'
import { FaHome, FaPlus, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = () => {

  return (
    <>
     <div className="link">
       <Link to='/'><FaHome/></Link>
       <Link to='/post' id='navplus'><FaPlus style={{border:'1px solid white',padding:'1px 4px',borderRadius:'6px'}}/></Link>
       <Link to='/login'><FaUser/></Link>
       
    </div>
    </>
  )
}

export default Nav