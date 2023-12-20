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
    gridContainer.innerHTML+= 
`<div class="grid-squares" id="grid-squares"> I'm a square </div>
<style>
#grid-squares {
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 120px;
}
</style>
`;
    i++;
    console.log("added a square");
};
createGrid();


