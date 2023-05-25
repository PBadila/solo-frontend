import logo from './logo.svg';
import './App.css';
import { useState,setState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { NavLink, Route, Routes, Router,Switch } from "react-router-dom"

import Name from './components/Name';
import AddBlog from './components/AddBlog'
import AddUsers from './components/AddUsers'
import Home from './components/Home'
import Blog from './components/Blog'
import AssignmentList from "./components/AssignmentList"
import HomeScreen from "./components/HomeScreen"
import AddAssignments from "./components/AddAssignments"
import Administrative from "./components/Administrative"

import userID from './components/HomeScreen'


function App() {
  
  let loginNameAndId
  const [userDetails, setUserDetails] = useState([{username:'kim lee',password:'Sophie5',firstName:'Sophie'}])
  const [loginInfo, setLoginInfo] = useState({
    username:'',
   })

  const navigate = useNavigate()

  useEffect (() => {
    fetch(`https://homeschool-app.onrender.com/users`)
        .then ((response) => {
            if (response.ok){
                return response.json()
            }else {
                throw new Error('Error fetching user details')
            }
        })
        .then ((data) => {
            setUserDetails(data)
            console.log(data)
        })
        .catch((error)=> {
            console.error(error.message)
        })
  }, [])
  
  const handleChange = (event) => {
        setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
    }

  const CheckUser = (username) =>{
      userDetails.forEach(person => {
        if (person.username === username){
          console.log('found person')
          console.log(username)
          let userID = person.id
          console.log(userID)
          loginNameAndId = username + '/'+ userID
          console.log(loginNameAndId)
         
          // navigate(`/homescreen/${loginNameAndId}`)
          return loginNameAndId
        }
      })
      
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    CheckUser(loginInfo.username)
    console.log(loginNameAndId)
    if (loginInfo.username == 'ritualmomma'){
      navigate(`/administrative`)
    }
}
  return (
   
 
     <div 
    //style ={myStyle}
  
      className="App background-image">
   
      <nav>
        <ul className="navList">
          <li className='nav'>
            <NavLink to ='/homescreen/1'>Home</NavLink>
            </li>
          {/* <li className='nav'>
            <NavLink to={`/practice/:${loginNameAndId}`}>Practice</NavLink>
          </li> */}
        
          <li className='nav'>
            <NavLink to='/blog/1'>Blog</NavLink>
          </li>
          
        </ul>
      </nav>
      
      <div className = "loginBoxApp">
            <form onSubmit={handleSubmit}>
               
                <div className="input">
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={loginInfo.username}
                    onChange={handleChange}
                  />
                </div>
               
               
                <div>
                  <button className="submit">Submit</button>
                </div>
              </form>
          </div>
          
       
      
      

      <Routes>  
         <Route exact path = "/" element={<Home />} />

         <Route path={`/blog/:userID`} element={<Blog />} />

         
          <Route path = '/addblog' element = {<AddBlog />} />
          <Route path = '/administrative/' element = {<Administrative />} />
          <Route path = '/addassignments' element = {<AddAssignments />} />
          <Route path = '/addusers' element = {<AddUsers />} />
          <Route path = '/assignmentList/:userID' element = {<AssignmentList />} />
          <Route path = '/homescreen/:userID' element = {<HomeScreen />} />
      </Routes>

    </div>
   
  
  );
}

export default App;
