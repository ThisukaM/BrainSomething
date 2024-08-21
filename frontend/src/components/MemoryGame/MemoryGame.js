let level = 4;
let tileNeeded = 1;

function generateRandomTiles(numberOfTiles) {
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

        tile.addEventListener('click', function() {
            onTileClick(i + 1);
        });

        tilesContainer.appendChild(tile);
    }
}

function onTileClick(tileNumber) {

    if(tileNumber == tileNeeded){
        removeTileByID(document.getElementById(tileNumber-1));
        if(tileNeeded < level){
            tileNeeded++;
        }
        else if(tileNeeded == level){
            level++;
            tileNeeded = 1;
            generateRandomTiles(level);
        }
    }
    else{
        alert('Wrong! Tile ' + tileNumber + ' clicked!');
    }
}

function removeTileByID(tile){
    tile.style.backgroundColor = 'transparent';
    tile.classList.add('disabled');
    tile.style.boxShadow = 'none';
    tile.textContent = '';
}

generateRandomTiles(level);