const gridContainer = document.querySelector("#grid-container");
const tools = document.querySelector("#tools");

const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('button');
changeSizeBtn.setAttribute('id', 'change-size-btn');
changeSizeBtn.textContent="Change grid size?";
tools.appendChild(changeSizeBtn);