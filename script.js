const slotValues = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'seven'];

let coins = 100;

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

const spinBtn = document.getElementById("spin-button");
spinButton.addEventListener("click", spin);

function spin() {
    const result1 = Math.floor(Math.random() * symbol.length);
    const result2 = Math.floor(Math.random() * symbol.length);
    const result3 = Math.floor(Math.random() * symbol.length);

    slot1.textContent = symbol[result1];
    slot2.textContent = symbol[result2];
    slot3.textContent = symbol[result3];

    if (result1 === result2 && result2 === result3) {
        alert('Congratulations! You Won!')
    } else {
        alert('Sorry, try again!')
    }
}