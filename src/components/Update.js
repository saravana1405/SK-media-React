import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Taskbar from './Taskbar'
import { FaPager, FaUser } from 'react-icons/fa'
import Nav from './Nav'

const Update = ({items,handleupdate,editname,setEditName,edittitle,setEditTitle,editbody,setEditBody}) => {
    const {id} = useParams()
    const post = items.find(item => item.id.toString()===id)

   useEffect(() => {
    if(post){
      setEditName(post.name)
      setEditTitle(post.title)
      setEditBody(post.body)
   }
   },[post,setEditName,setEditTitle,setEditBody])
  return (
    <>
       <Taskbar/>
       
       {post && 
         <div className="update">
            <h3>Update your Post</h3>
            <form  className='postform' onSubmit={(e)=>handleupdate(post.id)}>
                <div className="username">
                    <FaUser/>
                      <input type="text"
                      value = {editname}
                      autoComplete='off'
                      onChange={(e) =>setEditName(e.target.value)}
                      required
                      />
                </div>
                <div className="posttitle">
                        <FaPager/>
                        <input type="text"
                        value={edittitle}
                        onChange={e => setEditTitle(e.target.value)}
                      required
                        />
                </div>
                <div className="textarea">
                      <textarea 
                      onChange={e => setEditBody(e.target.value)}
                      rows="8" cols="30"
                      value={editbody}
                      required
                      >
                      </textarea>
                </div>
                <div className="newpost">
                <button type='submit'>Save</button> 
                </div> 
            
            </form>
      </div>
       }
       <div className="nav">
           <Nav/>
       </div>
    </>
  )
}

export default Update