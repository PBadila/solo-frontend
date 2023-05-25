import { useState } from 'react'
import yoga from '../imgs/yoga.png'
import chakras from '../imgs/chakras.png'
import herbs from '../imgs/herbs.png'




const FlipCard = ({topic}) => {
    
    //Getting picture for the card, depending on topic
    const getBackImg = (topic) => {
        switch (topic) {
            case 'yoga':
                return yoga
                break
            case 'chakras':
                return chakras
                break
            case 'herbs':
                return herbs
                break
         
          default:
            return null;
        }
      };
      //Getting color of card, based on topic
      const getCardColor = (topic) => {
        switch (topic) {
            case'yoga':
                return '#73c39e'
                break
            case'chakras':
                return '#cbc9f0'
                break
            case'herbs':
                return '#ed816a'
                break
        }
      }

       //Getting words for back of card
       const getCardWords = (topic) => {
        switch (topic) {
            case'yoga':
                return 'I am a Kemetic Yoga Basu'
                break
            case'chakras':
                return 'I am a Reiki Master'
                break
            case'herbs':
                return 'I am an herbalist'
                break
        }
      }
  


    const cardStyle ={
        backgroundImage:`url(${getBackImg(topic)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:"no-repeat",
        backgroundColor: `${getCardColor(topic)}` ,
    } 
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    }

    return (
        <div className="flip-card" >
            <div className="flip-card-inner">
                <div style={cardStyle} className={`flip-card-front ${topic}Flip`}>
                    
                </div>
                <div style={{backgroundColor: getCardColor(topic)}} className="flip-card-back">
                    <h1>{getCardWords(topic)}</h1>
                    
                </div>
            </div>
        </div>
    )
}
export default FlipCard