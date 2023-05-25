import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Assignment from './Assignment'

const AssignmentList = () => {
    const { userID }  = useParams();
    let user = userID
    console.log(user)
    
   
    const [assignments, setAssignments] = useState([])
    const [checkedList, setCheckedList] = useState([])

    useEffect(() => {
        fetch(`https://homeschool-app.onrender.com/assignments/user/${userID}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
                
            }else{
                throw new Error('Error fetching project data')
            }
        })
        .then(
            (data) => setAssignments(data),
            console.log(assignments)

        )
        .catch((error) => {
            console.error('Error fetching assignment data',error)
            
        })
    }, [])
    console.log(assignments)
  


   
       
return(    
    <div className='mainContainer'>    
        <div className="assignments">
            {assignments.map((assignment) => {
                return(
                    <div key={assignment.id}>
                        <Assignment 
                            title = {assignment.title}
                            instructions = {assignment.instructions}
                            link = {assignment.link}
                            video = {assignment.video}

                        />
                    </div> 
            
                )
            })}
        </div>
    </div>
   
    
)
                
                   
         
       
    

}

export default AssignmentList