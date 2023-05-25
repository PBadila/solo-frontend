import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlog from './AddBlog'



import me from '../imgs/mePic1.png'

const Blog = () => {
    const {id}  = useParams();
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()


    const addBlogEntry = () =>{
        console.log('clicked')
        navigate('/addblog')
    }

    useEffect (() => {
        fetch('https://homeschool-app.onrender.com/blogs/user/1')
            .then ((response) => {
                if (response.ok){
                    return response.json()
                }else {
                    throw new Error('Error fetching blogs')
                }
            })
            .then ((data) => {
                setBlogs(data)
                console.log(data)
                console.log(blogs)
            })
            .catch((error)=> {
                console.error(error.message)
                //not pulling data from render, so this is a default to display something on page
                setBlogs([{entry:"'Sooooooo, ahhhhhhh, this is my amazingly user-friendly default blog post that I have set for you to view while I figure out why sometimes it takes a while to connect to the API on render.com, or its a database issue with ElephantSQL.  Either way, I hope you are enjoying your day and that everyday is better and better. I appreciate you taking the time to checkout my blog. May peace and abundant blessings always be with you. By the way, tomorrow is my Gramma's birthday. She was born in 1928.  She would have been 95 tomorrow.  She promised me 100.  Not throwin shade, Gramma.  It is also my bootcamp instructor's birthday.  Brandon is the best instructor ever.  I hope he has an incredible birthday tomorrow.'", date:'2023-5-21'}])
            })
    }, [])

    return(
        <div className="mainContainer">
           
            
                <div className='blogBtnBox'>
                    <button className='blogBtn' onClick={addBlogEntry}>Add Entry</button>
                </div>

                <div className="pageBlogContent">
                    
                        {blogs.map((blog) => (
                            
                            <div key={blog.id}>
                                <div className="blogCard">
                                <h1 className="blogAffirmation">{blog.affirmation}</h1>,
                                <h2>{blog.date.slice(0,10)}</h2>,      
                                <p>{blog.entry.slice(0,150)}...</p>
                            </div>
                            </div>
                         ))}
                    
                </div>
        </div>
        
    )
}

export default Blog