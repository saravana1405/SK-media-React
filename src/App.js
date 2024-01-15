import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Missing from './components/Missing';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Taskbar from './components/Taskbar';
import ViewPost from './ViewPost';
import Update from './components/Update';
import UserLogin from './components/UserLogin';
function App() {
  const navi = useNavigate()
  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem('local'))
  )
  
  const [name,setName] = useState('')
  const [posttitle,setPostTitle] = useState('')
  const [postbody,setPostBody] = useState('')
  const [search,setSearch] = useState('')
  const [searchresult,setSearchResult] = useState([])
  const [editname,setEditName] = useState('')
  const [edittitle,setEditTitle] = useState('')
  const [editbody,setEditBody] = useState('')

  function handlesubmit(){
    let id = items.length ? items[items.length -1].id + 1 : 1 ;
    const timeDate = format(new Date(),'MMMM dd,yyyy pp')
    const addlist = {id,name:name,title:posttitle,timeDate,body:postbody}
    const newlist = [...items,addlist]
    setItems(newlist)
    localStorage.setItem('local',JSON.stringify(newlist))
    setName('')
    setPostTitle('')
    setPostBody('')
    navi('/')
}
function handleupdate(id){
  const timeDate = format(new Date(),'MMMM dd,yyyy pp')
  const addlist = {id,name:editname,title:edittitle,timeDate,body:editbody}
  const newlist = items.map(item => item.id===id ? {...addlist} : item )
  setItems(newlist)
  localStorage.setItem('local',JSON.stringify(newlist))
    setEditName('')
    setEditTitle('')
    setEditBody('')
    navi('/')
  navi('/')
 
}
useEffect(() => {
  const finalresult = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  setSearchResult(finalresult.reverse())
},[items,search])

function handledelete(id){
  const security = '1405'
  const pin = prompt('Enter Pin : ')
  if(security===pin){
    const newlist = items.filter(item => (item.id) !== id)
    setItems(newlist)
    localStorage.setItem('local',JSON.stringify(newlist))
    navi('/')
  }
  else{
    alert('Wrong Pin ❌');
    return false
  }
}
return (
     <div className="app">
       <Routes>
            <Route path='/' element={
                  <Home 
                  items={searchresult} 
                  search={search} setSearch={setSearch}
                  />} />
            <Route path='post'>
              <Route index element={
                  <About 
                  name={name} setName={setName} 
                  setPostTitle={setPostTitle} setPostBody={setPostBody} 
                  posttitle={posttitle} postbody={postbody} 
                  handlesubmit={handlesubmit} search={search} setSearch={setSearch}/>} />
               <Route path=":id" element={<ViewPost items={items} handledelete={handledelete}/>}/>
               <Route path=":id/:id" element={<Update items={items} handleupdate={handleupdate} editname={editname} setEditName={setEditName} edittitle={edittitle} setEditTitle={setEditTitle} editbody={editbody} setEditBody={setEditBody} />}/>
            </Route>
         <Route path='*' element={<Missing/>}/>
         <Route path='/login' element={<UserLogin/>}/>
         <Route path='/taskbar' element={<Taskbar search={search} setSearch={setSearch}/>}/>
       </Routes>
      </div>
  );
}

export default App;
