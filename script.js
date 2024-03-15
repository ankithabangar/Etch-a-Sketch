const grid = document.querySelector(".grid");
const editSize = document.querySelector(".gridSize");
const rgb = document.querySelector(".rgb");
const cellList = document.querySelectorAll(".cell");
const defaultColor = document.querySelector(".black");
let defaultColorFlag = true;

function createGrid(size = 16) {
  const containerWidth = 500; // Width of the container
  const cellSize = containerWidth / size; // Calculate cell size

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`; // Set width of cell
    cell.style.height = `${cellSize}px`; // Set height of cell
    grid.appendChild(cell);
    cell.addEventListener("mouseenter", handleMouse);
    cell.addEventListener("mouseleave", handleMouse);
  }
}
createGrid();

function removeGrid() {
  grid.innerHTML = "";
}

function handleMouse(event) {
  if (defaultColorFlag) {
    event.target.style.backgroundColor = "black";
  } else {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}

function getGridSize() {
  let size = prompt("Enter your grid size(max 100)");
  if (size !== null && size !== "") {
    size = parseInt(size);
    size = Math.min(Math.max(size, 1), 100);
    removeGrid();
    createGrid(size);
  }
}

editSize.addEventListener("click", getGridSize);

rgb.addEventListener("click", () => {
  defaultColorFlag = false;
});

defaultColor.addEventListener("click", () => {
  defaultColorFlag = true;
});
