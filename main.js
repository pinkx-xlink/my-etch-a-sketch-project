const gridContainer = document.querySelector("#grid-container");

const gridSquares = document.querySelector('#grid-squares');

let i = 0;
function createGrid() { 
    for (i = 0; i < 16; i++)
    gridContainer.innerHTML+= 
`<button class="grid-squares" id="grid-squares"></button>`;
    i++;
};

createGrid();