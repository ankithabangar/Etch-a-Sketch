const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 273; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    console.log("One square formed");
  }
}
createGrid();
