document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
    
    const sizeBtn = document.querySelector("#size-btn");
    sizeBtn.addEventListener('click', function() {
       let size = getSize();
       createGrid(size); 
    });
});

function createGrid(size) {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let totalSquares = size * size;
    
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "pink";
        square.setAttribute('id', 'square');
        gridContainer.insertAdjacentElement("beforeend", square);
    }
};

function getSize() {
    let input = prompt("Please enter a number between 2 and 100");
    if (input == "") {
        prompt("pls enter #")
    } else if (input > 2 && input < 100) {
        console.log("that works");
        return input;
    } else {console.log('error')}
};



