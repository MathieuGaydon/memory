import React from 'react';
import './VictoryModal.css';
import PropTypes from 'prop-types';

const VictoryModal = ({ isVisible, moveCount, onRestart, onClose }) => {
    if (!isVisible) return null;

    const getScoreRating = (moves) => {
        if (moves <= 20) return "⭐ Excellent !";
        if (moves <= 30) return "⭐ Très bien !";
        if (moves <= 40) return "⭐ Bien joué !";
        return "⭐ Continuez comme ça !";
    };

    return (
        <div className="victory-overlay">
            <div className="victory-modal">
                <div className="victory-content">
                    <div className="victory-icon">🎉</div>
                    <h2 className="victory-title">Bravo !</h2>
                    <p className="victory-message">
                        Vous avez terminé le jeu !
                    </p>
                    <div className="victory-score">
                        <div className="score-item">
                            <span className="score-label">Nombre de coups :</span>
                            <span className="score-value">{moveCount}</span>
                        </div>
                        <div className="score-rating">
                            {getScoreRating(moveCount)}
                        </div>
                    </div>
                    <div className="victory-buttons">
                        <button className="victory-btn restart-btn" onClick={onRestart}>
                            🔄 Rejouer
                        </button>
                        <button className="victory-btn close-btn" onClick={onClose}>
                            ✕ Fermer
                        </button>
                    </div>
                </div>
                
                {/* Confettis animés */}
                <div className="confetti">
                    {Array.from({ length: 50 }, (_, i) => (
                        <div
                            key={i}
                            className="confetti-piece"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)]
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

VictoryModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    moveCount: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default VictoryModal;