let color = "blue";

const gridContainer = document.querySelector("#grid-container");
const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent ="Change grid size?";
tools.appendChild(changeSizeBtn);
changeSizeBtn.addEventListener('click', new Grid());

const multiply = function(a) {
    let product = a * a;
    return product;
    console.log(product);
}

let i = 0;
function Grid() {
  const newGrid = function () {

    const gridSizeInput = prompt("How many squares?");
    
    let gridSize = document.querySelector("#grid-size");
    gridSize = multiply(gridSizeInput);
    console.log(gridSize);

    for (i = 0; i < gridSizeInput;) {
      if (gridSizeInput > 100) {
        alert("too many squares, dude!");
        console.log("New Grid not made - too many squares requested.");
      } else if (gridSizeInput < 100) {
        for (i = 0; i < gridSize;) {
            gridContainer.innerHTML += `<button id="grid-size">o</button>`;
            console.log("Congrats, we made a new grid using a constructor!");
            console.log(`Grid measurements: ${gridSizeInput} x ${gridSizeInput}`);
            ++i;
        };
      };
    };
  };
  return newGrid;
  return gridSize;
};

function changeColor() {
    gridSize.addEventListener("mouseover", changeColor);
    
}


// function changeColor() {
//     gridContainer.innerHTML = `
//     <style>
//     #grid-squares,
//     #grid-size,
//     #grid-size-input {
//         background-color: blue;
//         border: 1px solid rgba(255, 0, 0, 0.26);
//     }
//     </style>
//     `;
// };
// const gridSize = document.querySelector("#grid-size");
// gridSize.addEventListener('click', changeColor());
//changeColor();
//gridSquares.addEventListener('click', changeColor());