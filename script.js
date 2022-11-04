function paintBlack (e) {
    // Works only if the button pressed was the left mouse button
    if (e.buttons === 1) this.style.backgroundColor = "black";
}

const containerBoard = document.getElementById("container-board");
// Default grid size is 16 - later can be changed
let gridSize = 16;

function drawBoard (gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.id = `row-${i}`;
        row.classList.add("row");
        containerBoard.appendChild(row);
        for (let j = 1; j <= gridSize; j++) {
            const column = document.createElement("div");
            column.id = `column-${i}-${j}`;
            column.classList.add("column");
            // Need both mousedown and mouseenter to allow continuous drawing
            column.addEventListener('mousedown', paintBlack);
            column.addEventListener('mouseenter', paintBlack);
            row.appendChild(column);
        }
    }
}

drawBoard(gridSize);

const gridElement = document.getElementById("column-2-3");
