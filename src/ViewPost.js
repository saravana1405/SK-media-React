import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Taskbar from './components/Taskbar'
import {  FaClock, FaComment, FaTable, FaUser } from 'react-icons/fa'
import Nav from './components/Nav'

const ViewPost = ({items,handledelete}) => {
    const navi = useNavigate()
    const {id} = useParams()
    const post = items.find(item => item.id.toString()===id)
  return (
   <>
      <Taskbar/>
      {post && 
         <main className='viewpost'>
          <h3>Your Post</h3>
          <div className="para">
                <div className="name">
                    <FaUser/>
                    <label>Name : </label>
                    <p>{post.name}</p>
                </div>
                <div className="title">
                    <FaTable/>
                    <label>Title : </label>
                    <p>{post.title}</p>
                </div>
                <div className="date">
                    <FaClock/>
                    <label>Date & Time : </label>
                    <p>{post.timeDate}</p>
                </div>
                <div className="textcontent">
                    <FaComment/>
                    <label>Content</label>
                    <p> {post.body}</p>
                </div>
          </div>
          <div className="buttons">
              <button id='first' onClick={(e)=>navi('/post')}>New Post</button>
              <button id='del' onClick={()=>handledelete(post.id)}>Delete</button>
              <Link to={`${post.id}`} id='edit'>Edit</Link>
          </div>
         </main>
      }
      {!post && 
        <> 
        <h2 style={{color:'red', margin:'5vh 10vw',fontWeight:'600'}}>Post is Empty</h2>
      <h4 style={{ margin:'3vh 20vw'}}>Goback to Homepage....</h4>
        </>
      }
      <div className="nav">
        <Nav/>
      </div>
   </>
    
  )
}

export default ViewPost