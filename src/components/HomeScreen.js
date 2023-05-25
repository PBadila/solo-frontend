

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Name from './Name'
import Face from './Face'
import DateComponent from './DateComponent'
import Home from './Home'
import Affirmation from './Affirmation'


const HomeScreen = () => {
    
    
    const { userID }  = useParams();
    // let userName = user.slice(0,user.indexOf('_'))
    // console.log(userName)
    // let userID = user.slice(1+user.indexOf('_'))
    console.log(userID)
    
    const navigate = useNavigate()

    const toAssignments = () =>{
        navigate(`/assignmentList/${userID}`)
    }

    
    return (
        <div className="mainContainerHome">
            <DateComponent />
            {/* <Name username = {userName}/>   */}
           
           <button className="seeAssignments" onClick={toAssignments}>Go to Assignments</button>
           
            <Face />
        </div>
    )
}

export default HomeScreen