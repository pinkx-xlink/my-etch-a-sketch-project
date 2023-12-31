document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
    
    const sizeBtn = document.querySelector("#size-btn");
    sizeBtn.addEventListener('click', function() {
       let size = getSize();
       createGrid(size); 
    });
});

const blackBtn = document.querySelector("#black");
const erasorBtn = document.querySelector("#erasor");
const rainbowBtn = document.querySelector("#rainbow");



function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let totalSquares = size * size;
    
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');

        // square.addEventListener("mouseover", function changeColor() {
        //     this.style.backgroundColor = "purple";
        // });

            blackBtn.addEventListener("click", function black() {
                square.addEventListener("mouseover", function () {
                    this.style.backgroundColor = "black";
                });
            //    this.style.backgroundColor = "black";
            //    this.style.color = "white";
            });
        
            erasorBtn.addEventListener("click", function erase() {
                square.addEventListener("mouseover", function () {
                    this.style.backgroundColor = "white";
                });
               // this.style.backgroundColor = "white";
            });
        
            rainbowBtn.addEventListener("click", function rainbow() {
                square.addEventListener("mouseover", function () {
                    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                });
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });

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