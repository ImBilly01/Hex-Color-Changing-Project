// Hex colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get button id
const btn = document.getElementById('btn');

// Button onclick change background color
btn.addEventListener('click', () => {

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    // Change background color
    document.body.style.backgroundColor = hexColor;

    // Color name on the console
    console.log(hexColor);

});

// Get random color
function getRandomNumber() {
    // Random color
    return Math.floor(Math.random() * hex.length);
}