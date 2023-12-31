document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
    console.log(":P");
});

const sizeBtn = document.querySelector("#size-btn");
const size = prompt("Please enter a number between 2 and 100");

function createGrid(size) {
    let gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};
