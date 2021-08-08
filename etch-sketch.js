const DivContainer = document.querySelector('.divContainer');
const squareDivs = document.createElement('div');
var gridAmount = 8;

//Loop to generate any number of squares per side (16x16, 32x32, 64x64).
for (i = 0; i < gridAmount; i++) {
    for (j = 0; j < gridAmount; j++) {
    const selectSquareDivs = document.querySelector('div');
    DivContainer.appendChild(selectSquareDivs);
    squareDivs.className = "squareDivs";
    }   
}

//Changes the square color once when the mouse pointer hovers over.
const gridHover = document.querySelectorAll('div');
gridHover.addEventListener('mouseenter', () => {squareDivs.style.background = 'black';
});
