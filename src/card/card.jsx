import { useState, useEffect } from "react";
import './card.css';


const CardVerso = [
    { id: 1, img: "../public/card_verso/kraken.png", value: 10 },
    { id: 2, img: "../public/card_verso/Sirene.png", value: 20 },
    { id: 3, img: "../public/card_verso/leviathan.png", value: 30 },
    { id: 4, img: "../public/card_verso/lockhness.png", value: 40 },
    { id: 5, img: "../public/card_verso/jormungand.png", value: 50 },
    { id: 6, img: "../public/card_verso/dragon.png", value: 60 },
    { id: 7, img: "../public/card_verso/hydre.png", value: 70 },
    { id: 8, img: "../public/card_verso/Hippocampe.png", value: 80 }
];

const CardRecto = "../public/card_recto/card_recto.png";

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    
    // Sélectionne une carte aléatoire au chargement du composant
    useEffect(() => {
        selectRandomCard();
    }, []);
    
    const selectRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * CardVerso.length);
        setSelectedCard(CardVerso[randomIndex]);
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        
        console.log("clique effectué");
        

        if (!isFlipped && selectedCard && props.onCardFlip) {
            props.onCardFlip(selectedCard.id, selectedCard.value);
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
                    <img src={CardRecto} alt="Recto" />
                </div>
                

                <div className="card-face card-back">
                    {selectedCard && (
                        <>
                            <img src={selectedCard.img} alt={`Carte ${selectedCard.id}`} />
                            {/* Si vous voulez afficher la valeur sur la carte, décommentez ci-dessous */}
                            {/* <div className="card-value">{selectedCard.value}</div> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;