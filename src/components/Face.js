import { useState, useEffect } from 'react'
import eyeClose from '../imgs/closedEye.png'
import eyeMid from '../imgs/midEye.png'
import eyeOpen from '../imgs/openEye.png'

const Face = () => {
    const [blinkIndex, setBlinkIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkIndex((prevIndex) => (prevIndex+1) % 3)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const expressions = [
        eyeOpen,
        eyeMid,
        eyeClose,
        eyeClose,
        eyeClose,
        eyeClose,
        eyeClose
    ]

    const currentExpression = expressions[blinkIndex]
    return(
        <div className="eyes">
            <img className= "eyes2" src={currentExpression} alt="Face" />
        </div>
    )
}
export default Face