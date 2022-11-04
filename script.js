const containerBoard = document.getElementById("container-board");
const buttonGridSize = document.getElementById("button-grid-size");
const containerBoardSize = 480;
/* gridSize * gridSize - square board for drawing */
let gridSize = 16;
let paintColor = "black";

/**
 * Paints a grid block with the chosen paint color - so far hardcoded black
 * 
 * @param {event} e event that called this function 
 */
function paintGridBlock (e) {
    // Works only if the button pressed was the left mouse button
    if (e.buttons === 1) this.style.backgroundColor = paintColor;
}

/**
 * Calculates the necessary size of one block and creates a square grid of divs that can be painted with a mouse
 * 
 * @param {number} gridSize Resulting block grid will be size gridSize * gridSize
 */
function drawBoard (gridSize) {
    /* Clear the container if there are already any grid blocks */
    containerBoard.replaceChildren();
    const gridBlockSize = containerBoardSize / gridSize;

    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.id = `row-${i}`;
        row.classList.add("row");
        containerBoard.appendChild(row);

        for (let j = 1; j <= gridSize; j++) {
            const column = document.createElement("div");
            column.id = `column-${i}-${j}`;
            column.classList.add("column");
            column.style.height = `${gridBlockSize}px`;
            column.style.width = `${gridBlockSize}px`;
            /* Need both mousedown and mouseenter to allow continuous drawing */
            column.addEventListener('mousedown', paintGridBlock);
            column.addEventListener('mouseenter', paintGridBlock);
            row.appendChild(column);
        }
    }
}

/**
 * Prompts the user for a number between 1 and 100, then changes the gridSize to the input number
 */
function changeGridSize () {
    const newGridSize = parseInt(prompt('Enter the new grid size: (1 to 100)'));
    console.log(newGridSize);
    if ((newGridSize => 1) && (newGridSize <= 100)) {
        gridSize = newGridSize;
        drawBoard(gridSize);
    }
    else {
        alert('You need to input a valid number');
    }
}

drawBoard(gridSize);
buttonGridSize.addEventListener('click', changeGridSize);
