const gridContainer = document.querySelector("#grid-container");
const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent="Change grid size?";
tools.appendChild(changeSizeBtn);

function Grid() {

    changeSizeBtn.addEventListener('click', function changeSize() {
        const newSize = prompt("How many squares?");
        console.log(`${newSize}`);
        let i = 0;
        function createNewGrid() { 
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
    

    this.newGrid = function () {
        console.log("Congrats, we made a new grid using a constructor!")
    }
};