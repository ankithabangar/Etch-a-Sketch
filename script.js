const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 273; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}
createGrid();

const gridCells = container.querySelectorAll(".cell");

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
  });
  cell.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "black";
  });
});
