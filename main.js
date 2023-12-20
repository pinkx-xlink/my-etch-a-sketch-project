const gridContainer = document.querySelector("#grid-container");

// const gridSquares = document.createElement('div');
// gridSquares.classList.add('div');
// gridSquares.textContent = "I'm a square";
// gridSquares.setAttribute('id', 'grid-squares');
// gridContainer.appendChild(gridSquares);

//const gridArray = Array(16);

let i = 0;
function createGrid() {
    for (i = 0; i < 16; i++)
    gridContainer.innerHTML+= `<div class="grid-squares" id="grid-squares"> square </div>`;
    i++;
    console.log("added a square");
};
createGrid();


