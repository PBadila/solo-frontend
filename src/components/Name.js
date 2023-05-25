const Name = ({username}) => {
    console.log(username)
    console.log({username})
    return(
        <div className='headerName'>
            <p>Good Morning {username}</p>
        </div>
    )
}
export default Name