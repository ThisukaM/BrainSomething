import React, { useState } from 'react';
import ReactionGame from '../components/ReactionGame'; // Import the ReactionGame component
import './Reaction.css'; // Additional styling for the page

const Reaction = () => {
    const [reactionTimes, setReactionTimes] = useState([]);

    const handleReactionComplete = (time) => {
        setReactionTimes([...reactionTimes, time]);
    };

    return (
        <div className="reaction-page">
            <h1>Reaction Game</h1>

            {/* Include the ReactionGame component here */}
            <ReactionGame onReactionComplete={handleReactionComplete} />

            <div className="statistics">
                <h2>Statistics</h2>
                {reactionTimes.length > 0 ? (
                    <ul>
                        {reactionTimes.map((time, index) => (
                            <li key={index}>Attempt {index + 1}: {time} ms</li>
                        ))}
                    </ul>
                ) : (
                    <p>No attempts yet.</p>
                )}
            </div>
        </div>
    );
};

export default Reaction;
