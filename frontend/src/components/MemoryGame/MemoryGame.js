let level = 4;

function generateRandomTiles(numberOfTiles) {
    const tilesContainer = document.getElementById('tiles');
    const totalColumns = 10; 
    const totalRows = 5; 

    for (let i = 0; i < numberOfTiles; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.textContent = i + 1;

        
        const randomColumn = Math.floor(Math.random() * totalColumns) + 1;
        const randomRow = Math.floor(Math.random() * totalRows) + 1;

        
        tile.style.gridColumn = randomColumn;
        tile.style.gridRow = randomRow;

        tilesContainer.appendChild(tile);
    }
}

generateRandomTiles(level);