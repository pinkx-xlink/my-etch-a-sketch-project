document.addEventListener("DOMContentLoaded", function() {
    //createGrid(16);
    //getSize();
    console.log(":P");
});
let gridContainer = document.querySelector("#grid-container");
const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener('click', getSize);

function getSize() {
    const size = prompt("Please enter a number between 2 and 100");
    return size;
    let product = (size * size);
    console.log(product);

    function createGrid(size) {
        
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
        for(i = 0; i < product; ++i) {
            let square = document.createElement('div');
            square.style.backgroundColor = "pink";
            gridContainer.insertAdjacentElement("beforeend", square);
        }
    };
    createGrid();
};



