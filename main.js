const gridContainer = document.querySelector("#grid-container");

// let i = 0;
// function createGrid() { 
//     for (i = 0; i < 16; i++)
//     gridContainer.innerHTML+= `<button class="grid-squares" id="grid-squares"></button>`;
//     i++;
// };
// createGrid();

const gridSquares = document.querySelector('#grid-squares');

const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent="Change grid size?";
tools.appendChild(changeSizeBtn);

function clearGrid() {
    if (gridSquares > 0) {
        gridSquares === 0;
        console.log("fresh canvas");
    } else if (newGridSquares > 0) {
        newGridSquares ===0;
        console.log("fresh canvas");
    }
}

changeSizeBtn.addEventListener('click', function changeSize() {
    const newSize = prompt("How many squares?");
    console.log(`${newSize}`);
    function createNewGrid() { 
        clearGrid();
        let i = 0;
        for (i = 0; i < newSize;) { 
        if (newSize > 100) {
            alert("Too much square, dude!!");
            break;
        } else if (newSize < 100) {
            const newGridSquares = document.createElement('button');
            newGridSquares.setAttribute('id', 'new-grid-squares');
            gridContainer.appendChild(newGridSquares);
            ++i;
        };  
        };
    };
   createNewGrid();
});
