import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ index, cardData, cardRecto, isFlipped, onCardFlip }) {
    const handleClick = () => {
        if (!isFlipped && !cardData.matched) {
            onCardFlip(index);
        }
    };

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    
    return (
        <div className="card-container" draggable="true" onDragStart={handleDragStart}>
            <div 
                className={`card ${isFlipped ? 'flipped' : ''} ${cardData.matched ? 'matched' : ''}`} 
                onClick={handleClick}
            >
                {/* Face avant (recto) */}
                <div className="card-face card-front">
                    <img src={cardRecto} alt="Recto" draggable={false}/>
                </div>
                
                {/* Face arrière (verso) */}
                <div className="card-face card-back">
                    <img src={cardData.img} alt={`Carte ${cardData.id}`} draggable={false} />
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    index: PropTypes.number.isRequired,
    cardData: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        img: PropTypes.string.isRequired,
        matched: PropTypes.bool.isRequired,
    }).isRequired,
    cardRecto: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onCardFlip: PropTypes.func.isRequired,
};

export default Card;