import React from 'react'
import Nav from './Nav'
import Taskbar from './Taskbar'
import { FaPager, FaUser } from 'react-icons/fa'

const About = ({name,setName,posttitle,setPostTitle,postbody,setPostBody,handlesubmit,search,setSearch}) => {

  return (
    <>
    <Taskbar search={search} setSearch={setSearch}/>
    <div className="newpost">
      <h2>Welcome</h2>
        <h3>Share Your New Post...</h3>
            <form className='postform' onSubmit={handlesubmit}>
                <p>New Post</p>
                    <div className="username">
                    <FaUser/>
                      <input type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      autoComplete='off'
                      placeholder='Your Name'
                      required
                      />
                    </div>
                    <div className="posttitle">
                        <FaPager/>
                        <input type="text"
                        value={posttitle}
                        onChange={(e)=>setPostTitle(e.target.value)}
                      placeholder='Title'
                      required
                      autoComplete='off'
                        />
                    </div>
                    <div className="textarea">
                      <textarea 
                      placeholder='Share your Comments' 
                      rows="8" cols="30"
                      value={postbody}
                      onChange={(e)=>setPostBody(e.target.value)}
                      required
                      autoComplete='off'
                      >
                      </textarea>
                    </div>
                    <button type='submit'>Post</button>
            </form>
    </div>
    <div className="nav">
    <Nav/>
    </div>
    </>
  )
}

export default About