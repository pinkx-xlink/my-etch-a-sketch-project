const gridContainer = document.querySelector("#grid-container");
const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent ="Change grid size?";
tools.appendChild(changeSizeBtn);
changeSizeBtn.addEventListener('click', new Grid());

const gridSquares = document.createElement('button');
gridSquares.classList.add('button');
gridSquares.setAttribute('id', 'grid-squares');
gridContainer.appendChild(gridSquares);

const multiply = function(a, a) {
    let product *= a;
    return product;
    console.log(product);
}

let i = 0;
function Grid() {
  const newGrid = function () {
    const gridSize = prompt("How many squares?");

    for (i = 0; i < gridSize;) {
      if (gridSize > 100) {
        alert("too many squares, dude!");
        console.log("New Grid not made - too many squares requested.");
      } else if (gridSize < 100) {
        gridContainer.innerHTML += `<button>o</button>`;
        //gridContainer.appendChild(newGridSquares); Node issue
        console.log("Congrats, we made a new grid using a constructor!");
        console.log(`${gridSize}`);
        ++i;
      };
    };
  };
  return newGrid;
  return gridSize;
};

