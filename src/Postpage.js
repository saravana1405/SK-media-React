import React, { useState } from 'react'
import { FaComment, FaHeart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Postpage = ({item}) => {
  const [heart,setheart] = useState(true)
  const result = Math.floor(Math.random()*59)
  const [confirm,setConfirm] = useState(result)
  return (
    <>
        <ul>
            <li className='li' key={item.id}>
            <Link to={`post/${item.id}`} className='contentlink'>
                    <div className="profile">
                    <FaUser id='usericon'/>
                    <h2 id='name'>{item.name}</h2>
                    </div>
                    <p id='title'>{item.title}</p>
                    <p id='timeDate'>{item.timeDate}</p>
                    <div className="comment">
                      <FaComment/>
                    <p id='body'>{`${item.body.length <= 25 ? item.body : (item.body).slice(0,25)} ....`}</p>
                    </div>
                    </Link>
                    <div className="heart">
                    <FaHeart id={heart ? 'white' : 'red'} onClick={(e)=>setheart(!heart) }/>
                    <p style={{color:heart===true ? 'red' : 'white'}}>..Likes</p>
                    <p id='count' onClick={()=>setConfirm()}>{heart ?  confirm : confirm+1}</p>
                    </div>
            </li>
                 
         </ul>
    </>
  )
}

export default Postpage