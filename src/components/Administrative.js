import { useNavigate } from 'react-router-dom'

const Administrative = () =>{
    const navigate = useNavigate()

    const addAssignments = () =>{
        navigate('/addassignments')
    }

    // const addAffirmations = () =>{
    //     navigate('/addaffirmations')
    // }

    // const addCalendar = () =>{
    //     navigate('/addCalendar')
    // }

    const addUsers = () =>{
        navigate('/addusers')
    }

    return (
        <div className="mainContainer">
            <button className="adminButtons" onClick={addAssignments}>Add Assignment</button>
            <button className="adminButtons" onClick={addUsers}>Add User</button>
            {/* <button>Add Affirmation</button> */}
            {/* <button>Add Calendar Event</button> */}
        </div>
    )

}
export default Administrative