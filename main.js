const gridContainer = document.querySelector("#grid-container");
const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent="Change grid size?";
tools.appendChild(changeSizeBtn);
changeSizeBtn.addEventListener('click', new Grid());

const gridSquares = document.createElement('button');
gridSquares.classList.add('button');
gridSquares.setAttribute('id', 'grid-squares');
gridContainer.appendChild(gridSquares);

function Grid() {
    const newGrid = function () {
        const gridSize = prompt("How many squares?");
        console.log("Congrats, we made a new grid using a constructor!");
        console.log(`${gridSize}`);
    }
    return newGrid;
    return gridSize;
};

