import { useState } from "react";
import './card.css';

function Card({ index, cardData, cardRecto, onCardFlip }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        if (!isFlipped) {
            setIsFlipped(true);
            onCardFlip(index);
        }
    };
    
    return (
        <div className="card-container">
            <div 
                className={`card ${isFlipped ? 'flipped' : ''}`} 
                onClick={handleClick}
            >
                {/* Face avant (recto) */}
                <div className="card-face card-front">
                    <img src={cardRecto} alt="Recto" />
                </div>
                
                {/* Face arrière (verso) */}
                <div className="card-face card-back">
                    <img src={cardData.img} alt={`Carte ${cardData.id}`} />
                    {/* Si vous voulez afficher la valeur sur la carte, décommentez ci-dessous */}
                    {/* <div className="card-value">{cardData.value}</div> */}
                </div>
            </div>
        </div>
    );
}

export default Card;