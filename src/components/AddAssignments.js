import { useState,setState } from 'react'

const AddAssignments = () => {

    const [assignmentInfo, setAssignmentInfo] = useState({
        title:'',
        instructions:'',
        link:'',
        video:'',
        userID:'',
    })

    const handleChange = (event) => {
        setAssignmentInfo({...assignmentInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(assignmentInfo);
        console.log(assignmentInfo.title)

        try{
          console.log('trying')
            const response = await fetch('https://homeschool-app.onrender.com/assignments',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(assignmentInfo),
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
        setAssignmentInfo({ 
            title:'',
            instructions:'',
            link:'',
            video:'',
            userID:'',
        
        })
    }
    
    return(
        <div className = "mainContainer">
  
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add an Assignment</h3>
        </div>
        <div>
          <input
            type="integer"
            name="userID"
            placeholder="User ID"
            value={assignmentInfo.userID}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={assignmentInfo.title}
            onChange={handleChange}
          />
        </div>
        <div>
            <textarea
                type="text"
                rows="22"
                cols="50"
                name="instructions"
                placeholder="Instruction"
                value={assignmentInfo.instructions}
                onChange={handleChange}
            />
        </div>
        <div>
        <input
            type="text"
            name="link"
            placeholder="Link"
            value={assignmentInfo.link}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            name="video"
            placeholder="Video"
            value={assignmentInfo.video}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <button>Submit New Assignment</button>
        </div>
      </form>
    </div>
    )
   
}

export default AddAssignments