const DivContainer = document.querySelector('.divContainer');
//const squareDivs = document.createElement('div');
var gridAmount = 8;


//Loop to generate any number of squares per side (16x16, 32x32, 64x64).
for (i = 0; i < gridAmount; i++) {
    for (j = 0; j < gridAmount; j++) {
    const squareDivs = document.createElement('div');
    DivContainer.appendChild(squareDivs);
    squareDivs.classList.add("squareDivs");
    //Changes squares to a random color on mouse hover
    squareDivs.addEventListener('mouseenter', () => {
        squareDivs.style.background = "#" + Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
        Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
        Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0");
        });
    }   
}

//Changes the grid size on slider
function updateSlider(gridAmount) {
    var sliderDisplay = document.getElementById("gridSize");
    sliderDisplay.innerHTML = gridAmount;
}
var gridDimensions = document.getElementById("grid-dimensions");
var sliderDisplay = document.getElementById("gridSize");
gridDimensions.oninput = function () {
    sliderDisplay.innerHTML = this.value;
}

//To do: create eventlistener to apply the gridsize shown on slider and to reset it