//const squareDivs = document.createElement('div'); //Why does this need to be in the loop?
const DivContainer = document.querySelector('.divContainer');
var gridAmount = 8;

//Loop to generate any number of squares per side (16x16, 32x32, 64x64)
for (i = 0; i < gridAmount; i++) {
    const squareDivs = document.createElement('div');
    DivContainer.appendChild(squareDivs);
    squareDivs.className = "squareDivs";   
}