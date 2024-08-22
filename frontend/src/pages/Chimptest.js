import React, { useState } from 'react';
import './MemoryGame.css'; // Import CSS directly in your JS file
import Chimptest from '../components/Chimptest/Chimptest';

function ChimpTest() {
    // State to manage whether the popup is shown
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <h1>Chimp Test</h1>
            <div>
                <h2 id="scoreboard">Level: 4</h2>
            </div>
            <div>
                <h2 id="strikes">Strikes: 0/3</h2>
            </div>
            <div className="tiles" id="tiles">
                {/* Your game tiles would go here */}
            </div>
            {showPopup && (
                <div id="popup" className="popup">
                    <div className="popup-content">
                        <h2>Game Over</h2>
                        <p>Try Again?</p>
                    </div>
                </div>
            )}
            <div id="overlay"></div>
        </div>
    );
}

export default ChimpTest;