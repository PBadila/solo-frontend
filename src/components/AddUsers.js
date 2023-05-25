import { useState,setState } from 'react'

const AddUsers = () => {

    const [userInfo, setUserInfo] = useState({
        username:'',
        password:'',
        firstName:'',
       
    })

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userInfo);
        console.log(userInfo.username)

        try{
          console.log('trying')
            const response = await fetch('https://homeschool-app.onrender.com/users',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(userInfo),
            });

            if (response.ok){
              console.log('here')
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
        setUserInfo({ 
            username:'',
            password:'',
            firstName:'',
        
        })
    }
    
    return(
        <div>
  
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add a User</h3>
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
    )
   
}

export default AddUsers