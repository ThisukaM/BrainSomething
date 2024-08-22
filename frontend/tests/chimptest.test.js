import {describe, test, it, expect} from "vitest";

describe('ResetGameState', () => {
    test('should set level back to 4', () => {
        // Arrange
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.textContent = "test";
        tile.id = '1';
            
        // Act
        removeTileByID(tile)

        // Assert
        expect(result).toBe(tile.textContent == '')
    })
})