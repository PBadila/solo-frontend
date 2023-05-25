import math from '../imgs/calculator.png'
import science from '../imgs/science.png'
import reading from '../imgs/reading.png'
import computerScience from '../imgs/computerScience.png'

const Assignment =  ({title,instructions,link,video})  =>{
    let subject = title.slice(0,title.indexOf('/'))
    let name = title.slice(1+title.indexOf('/'))
    const chooseImg=(subject)=>{
        console.log(subject)
        let cardImg=''
        switch (subject){
            case 'Math':
                cardImg = math
                console.log(cardImg)
                break
            case 'Science':
                cardImg = science
                console.log(cardImg)
                break
            case 'Reading':
                cardImg = reading
                console.log(cardImg)
                break
            case 'Computer Science':
                    cardImg = computerScience
                    console.log(cardImg)
        }

        return cardImg
    }
    console.log(subject)
    console.log(name)
    console.log(`${link}`)
    console.log(typeof(chooseImg(subject)))
    return(
        <div className="assignmentCard">
            <div className="imgBoxAssign">
                <img className="assignImg" src={chooseImg(subject)}/>
            </div>
            <h1>{name}</h1>
            <h2>{instructions}</h2>
                <a href={link} target = "_blank">Click here</a>
            
            {/* <div>{video}</div> */}

        </div>
    )
}
export default Assignment