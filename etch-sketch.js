const divContainer = document.querySelector('.divContainer');
const clearButton = document.querySelector('.clear');
//Moved to for loop: const squareDivs = document.createElement('div');

var gridAmount = 8;
createGrid();

//Loop to generate any number of squares per side (16x16, 32x32, 64x64).
function createGrid() {
    for (i = 0; i < gridAmount; i++) {
        for (j = 0; j < gridAmount; j++) {
        const squareDivs = document.createElement('div');
        divContainer.appendChild(squareDivs);
        squareDivs.classList.add("squareDivs");
        //Changes squares to a random color on mouse hover
        squareDivs.addEventListener('mouseenter', () => {
            squareDivs.style.background = "#" + Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
            Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
            Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0");
            });
        }   
    }
}

//Changes the grid size on slider
function updateSlider(gridAmount) {
    var sliderDisplay = document.getElementById("gridSize");
    sliderDisplay.innerHTML = gridAmount;
}
var gridDimensions = document.getElementById("grid-dimensions");
var sliderDisplay = document.getElementById("gridSize");
gridDimensions.oninput = function() {
    sliderDisplay.innerHTML = this.value;
}

//To remove square grid colors and recreate grid
function clearGridColor() {
    squareDivs.removeEventListener('mouseenter', ());
    createGrid();
}

clearButton.addEventListener('click', clearGridColor);

//To do: create eventlistener to apply the gridsize shown on slider