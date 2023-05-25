import { useState,setState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import HomeScreen from './HomeScreen'


const Home = () => {
  
  const [userDetails, setUserDetails] = useState([{username:'kim lee',password:'Sophie5',firstName:'Sophie'}])
  const [loginInfo, setLoginInfo] = useState({
    username:'',
    password:'',
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
          passwordResponse(username)
        }
      })
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      CheckUser(loginInfo.username)
}

const passwordResponse = (username) => {
  console.log (username)
  let pass =''
  let userData
  let userID
  userDetails.forEach(person => {
    if (person.password === loginInfo.password){
      
      console.log('found user')
      userID = person.id
      userData = username +'_'+ userID
      console.log(userData)
          if(username === 'ritualmomma'){
            console.log('Administrative')
            navigate('/administrative')
          } else{
              navigate(`/homescreen/${userData}`)
            }
      
    } else{
        // pass = "Incorrect password.  Try again."
       
    }
   
  })
}
 
return(
       
        <div className = "mainContainerHome">
          {/* <div className = "loginBox">
            <form onSubmit={handleSubmit}>
                <div>
                  <h3>Login</h3>
                </div>
                <div className="input">
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={loginInfo.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                  />
                </div>
                <h2></h2>
                <div>
                  <button className="submit">Submit</button>
                </div>
              </form>
          </div> */}
          </div>
       
)
}

export default Home