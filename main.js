document.addEventListener("DOMContentLoaded", function() {
    //createGrid(16);
    //getSize();
    console.log(":P");
});

const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener('click', getSize);

function createGrid(size) {
    let gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i = 0; i < product; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "pink";
        gridContainer.insertAdjacentElement("beforeend", square);
    }
};

function getSize() {
    const size = prompt("Please enter a number between 2 and 100");
    const product = (size * size);
    console.log(product);
}