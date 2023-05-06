const slotValues = ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'seven'];

let coins = 100;

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spin-button');
const coinCount = document.getElementById('coin-count');

coinCount.innerHTML = `Coins: ${coins}`;

function spin() {
  if (coins === 0) {
    const restart = confirm('You ran out of coins! Restart the game?');
    if (restart) {
      coins = 100;
      coinCount.innerHTML = `Coins: ${coins}`;
    } else {
      return;
    }
  }

  coins--;
  coinCount.innerHTML = `Coins: ${coins}`;

  const slot1Value = slotValues[Math.floor(Math.random() * slotValues.length)];
  const slot2Value = slotValues[Math.floor(Math.random() * slotValues.length)];
  const slot3Value = slotValues[Math.floor(Math.random() * slotValues.length)];

  slot1.classList.remove(slot1.classList[1]);
  slot1.classList.add(slot1Value);
  slot2.classList.remove(slot2.classList[1]);
  slot2.classList.add(slot2Value);
  slot3.classList.remove(slot3.classList[1]);
  slot3.classList.add(slot3Value);

  if (slot1Value === slot2Value && slot2Value === slot3Value) {
    coins += 10;
    coinCount.innerHTML = `Coins: ${coins}`;
    alert(`Congratulations! You won 10 coins!`);
  }
}

spinButton.addEventListener('click', spin);