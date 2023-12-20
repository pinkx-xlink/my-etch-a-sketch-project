const gridContainer = document.querySelector("#grid-container");

const gridSquare = document.createElement('div');
gridSquare.classList.add('div');
gridSquare.textContent = "I'm a square";
gridSquare.setAttribute('id', 'grid-square');
gridContainer.appendChild(gridSquare);

// let i = 0;
// function createGrid() {
//     for(i = 0; i < 16; i++) {
//         if (i < 16) {
//         ++gridSquare;
//         console.log("Add another square");
//     } else {
//         console.log("16x16 grid complete");
//     }
// }

// };


