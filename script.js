const grid = document.querySelector(".grid");
const editSize = document.querySelector(".gridSize");

function createGrid(size = 16) {
  const containerWidth = 400; // Width of the container
  const cellSize = containerWidth / size; // Calculate cell size

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`; // Set width of cell
    cell.style.height = `${cellSize}px`; // Set height of cell
    grid.appendChild(cell);
    draw(cell);
  }
}
createGrid();

function removeGrid() {
  grid.innerHTML = "";
}

function draw(cell) {
  cell.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "black";
  });
  cell.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "black"; // Restore default background color
  });
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
