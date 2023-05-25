import { useState,setState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

    const [blogInfo, setBlogInfo] = useState({
        title:'',
        date:'',
        entry:'',
        userID:'',
      })
      const navigate = useNavigate()

      const backToBlog = () =>{
          navigate('/blog/1')
      }
    const handleChange = (event) => {
        setBlogInfo({...blogInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(blogInfo);
        console.log(blogInfo.title)
        backToBlog()

        try{
            const response = await fetch(`https://homeschool-app.onrender.com/blogs`,{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(blogInfo),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
        setBlogInfo({ 
            title:'',
            date:'',
            entry:'',
            userID:'',
           
        })
    }
    
    return(
        <div className="blogEntryForm">
  
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add a Blog Post</h3>
        </div>
        <div>
          <input
            type="integer"
            name="userID"
            placeholder="UserID"
            value={blogInfo.userID}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={blogInfo.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            placeholder="YYYY-MM-DD"
            value={blogInfo.date}
            onChange={handleChange}
          />
        </div>
       
       
        <div>
          <textarea
            type="text"
            rows="22"
            cols="50"
            name="entry"
            placeholder="Blog Post"
            value={blogInfo.entry}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit Blog Entry</button>
        </div>
      </form>
    </div>
    )
   
}

export default AddBlog