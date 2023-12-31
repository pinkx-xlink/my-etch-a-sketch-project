const gridContainer = document.querySelector("#grid-container");

//let size = document.querySelector('input');
const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener('click', function () {
    let size = prompt("Please enter a number between 2 and 100");
    console.log(size);
});


function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
//createGrid(10);

