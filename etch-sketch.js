const DivContainer = document.querySelector('.divContainer');
//const squareDivs = document.createElement('div');
var gridAmount = 8;

//Loop to generate any number of squares per side (16x16, 32x32, 64x64).
for (i = 0; i < gridAmount; i++) {
    for (j = 0; j < gridAmount; j++) {
    const squareDivs = document.createElement('div');
    DivContainer.appendChild(squareDivs);
    squareDivs.classList.add("squareDivs");
    squareDivs.addEventListener('mouseenter', () => {
        squareDivs.style.background = "#" + Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
        Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0") + 
        Math.floor(80 + Math.random()*100).toString(16).padStart(2, "0");
        });
    }   
}
