import React, { useState } from 'react'
import { FaKey, FaMailBulk, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [color,setcolor] = useState(true)
    const navi = useNavigate()
    const [validate,setValidate] = useState({
      username : '',
      email : '',
      password : '',
      confirmpassword : ''
    })
    const [error,setError] = useState({})
    function onchange(e){
        const {name,value} = e.target;
        setValidate({...validate,[name]:value})
    }
  function handlesubmit(e){
      e.preventDefault()
      const validateError = {}
      if(!validate.username.trim()){
         validateError.username = "Username is Required"
      }
      if(!validate.email.trim()){
         validateError.email = "Email is Required"
      }
      if(!validate.password.trim()){
         validateError.password = "Password is Required"
      }
      if(!validate.confirmpassword.trim()){
         validateError.confirmpassword = "confirmpassword is Required"
      }
      else if(validate.password !== validate.confirmpassword){
         validateError.confirmpassword = "Password Does not match "
      }
      setError(validateError)

     if(Object.keys(validateError).length===0){
         navi('/')
     }
      
  }
  return (
   
    <div className="userlogin">
         <form onSubmit={handlesubmit}>
             <div className="user">
                 <p id='signup'>{color ? 'SignUp' : 'Login' }</p>
                 <div className="underline"></div>
             </div>
             {color ? 
             <div className="user">
                <FaUser/>
                <input type="text" name='username' 
                autoComplete='off' placeholder='Name'
                onChange={onchange} 
                />
             {error.username && <p className='error'>{error.username}</p>}
             </div>
             : <div></div>}
             <div className="email">
             <FaMailBulk/>
                <input type="email" autoComplete='off'
                placeholder='Email' name='email'
                onChange={onchange}  />
             {error.email && <p className='error'>{error.email}</p>}
             </div>
             <div className="password">
                <FaKey/>
                <input type="password" placeholder='Password'
                name='password' onChange={onchange} 
                />
                {error.password && <p className='error'>{error.password}</p>}
             </div>
             {color ?
             <div className="confirmpassword">
                <FaKey/>
                <input type="text" placeholder='Confirm Password'
                name='confirmpassword' onChange={onchange} 
                />
              {error.confirmpassword &&  <p className='error'>{error.confirmpassword}</p>}
             </div>
              : <div></div>}
             <div className="loginbutton">
                <button id='signupbutton' type='submit'>{color ? 'SignUp' : 'Login' }</button>
             </div>
             {color ? <p style={{margin:'15px 10px'}}>Already a User ? <span style={{color:'blue',cursor:'pointer',marginLeft:'5px'}} onClick={()=>setcolor(!color)}>Login</span></p> : <p style={{margin:'15px 10px'}}>New User ? <span style={{color:'blue',cursor:'pointer',marginLeft:'5px'}} onClick={()=>setcolor(!color)}>SignUp</span> </p>}
             <div className="bottom">
                <p id={color ? 'signbot' : 'logbot'} onClick={()=>setcolor(!color)}>Signup</p>
                <p id={color ? 'logbot' : 'signbot'} onClick={()=>setcolor(!color)}>Login</p>
             </div>
         </form>
    </div>
  )
}

export default UserLogin