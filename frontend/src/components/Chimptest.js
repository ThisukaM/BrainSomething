import React, { useEffect, useState } from 'react';
import './Chimptest.css';

function Chimptest() {
  let level = 4;
  let tileNeeded = 1;
  let strikes = 0;

  useEffect(() => {
    generateRandomTiles(level);

    return () => {
      const tilesContainer = document.getElementById('tiles');
      tilesContainer.innerHTML = '';
    };
  }, [level]);

  const generateRandomTiles = (numberOfTiles) => {
    const tilesContainer = document.getElementById('tiles');
    const usedPositions = new Set();
    tilesContainer.innerHTML = ''; 
    const totalColumns = 10; 
    const totalRows = 5; 

    for (let i = 0; i < numberOfTiles; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = i + 1;
      tile.id = `${i}`;

      let randomColumn, randomRow, positionKey;

      do {
        randomColumn = Math.floor(Math.random() * totalColumns) + 1;
        randomRow = Math.floor(Math.random() * totalRows) + 1;
        positionKey = `${randomColumn}-${randomRow}`;
      } while (usedPositions.has(positionKey));

      usedPositions.add(positionKey);

      tile.style.gridColumn = randomColumn;
      tile.style.gridRow = randomRow;

      tile.addEventListener('click', () => onTileClick(i + 1));

      tilesContainer.appendChild(tile);
    }
  };

  const onTileClick = (tileNumber) => {
    if (tileNeeded === 1) {
      const tiles = document.querySelectorAll('.tile');
      tiles.forEach(tile => {
        tile.textContent = '';
      });
    }

    if (tileNumber === tileNeeded) {
      removeTileByID(document.getElementById(tileNumber - 1));
      if (tileNeeded < level) {
        tileNeeded = tileNeeded + 1;
      } else if (tileNeeded === level) {
        level++;
        document.getElementById('scoreboard').textContent = `Level: ${level}`;
        tileNeeded = 1;
        generateRandomTiles(level);
      }
    } else {
      strikes++;
      flashText();
      document.getElementById('strikes').textContent = `Strikes: ${strikes}/3`;
      if (strikes === 3) {
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('overlay').style.display = 'flex';
      } else {
        tileNeeded = 1;
        generateRandomTiles(level);
      }
    }
  };

  const removeTileByID = (tile) => {
    tile.style.backgroundColor = 'transparent';
    tile.classList.add('disabled');
    tile.style.boxShadow = 'none';
    tile.textContent = '';
  };

  const handleTryAgain = () => {
    level = 4;
    tileNeeded = 1;
    strikes = 0;
    document.getElementById('strikes').textContent = `Strikes: 0/3`;
    document.getElementById('scoreboard').textContent = `Level: 4`;
    generateRandomTiles(4);
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  };

  const flashText = () => {
    const textElement = document.getElementById('strikes');
    textElement.classList.add('flash');

    setTimeout(() => {
      textElement.classList.remove('flash');
    }, 1000); 
  };

  return (
    <div>
      <div id="popup" className="popup">
        <div className="popup-content">
          <h2>Game Over</h2>
          <button className="rounded-button" id="rounded-button" onClick={handleTryAgain}>
            Try Again?
          </button>
        </div>
      </div>
      <div>
        <h2 id="scoreboard">Level: {level}</h2>
      </div>
      <div>
        <h2 id="strikes">Strikes: {strikes}/3</h2>
      </div>
      <div className="tiles" id="tiles"></div>
      <div className="overlay" id="overlay"></div>
    </div>
  );
}

export default Chimptest;