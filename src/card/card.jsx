import './card.css';

function Card({ index, cardData, cardRecto, isFlipped, onCardFlip }) {
    const handleClick = () => {
        if (!isFlipped && !cardData.matched) {
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
                </div>
            </div>
        </div>
    );
}

export default Card;