import { useState,setState, useEffect } from 'react'


let Affirmation = () =>{

    const [affirm, setAffirm] = useState([])
    
    useEffect (() => {
      fetch(`https://homeschool-app.onrender.com/affirmations/random`)
          .then ((response) => {
              if (response.ok){
                  return response.json()
              }else {
                  throw new Error('Error fetching user details')
              }
          })
          .then ((data) => {
              setAffirm(data)
              console.log(data)
              })
            .catch((error)=> {
                console.error(error.message)
            })
    }, [])
    
    return (
        <div className = 'mainComponentAff'>
            <h1>{affirm.statement}</h1> 
        </div>
    )
}

export default Affirmation