// Define the images for the slot machine
const images = [
  ".assets/cherries.png",
  ".assets/clover.png",
  ".assets/lemon.png",
  ".assets/melon.png",
  ".assets/bell.png"
]

// Define the audio clips for the slot machine
const audio = {
  spin: new Audio(),
  win: new Audio(),
  lose: new Audio()
}
// Set the inital number of coins
let coins = 100;

// Get the elemtns for the slot machine
const reels = document.querySelectorAll(".reel");
const spinButton = document.getElementById("spin-button");
const coinCount = document.getElementById("coin-count");

// Define the function for spin
function spin() {
  
  // Play the spin sound
  audio.spin.play();
  
  // Disable the spin button
  spinButton.disabled = true;
  
  // Decrement the number of coins
  coins--;
  
  // Update the coin count display
  coinCount.innerText = 'Coins: ${coins}';
  
  // Generate random values for each reel
  const reelValues = [];
  for (let i = 0; i < reels.length; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    reelValues.push(randomImage);
  }
  // Animate Reel
  animateReels(reelValues);
}

// Define the function to animate reels
function animateReels(reelValues) {
  reels.forEach((reel, index) => {
    reel.style.backgroundImage = 'url(${reelValues[index]})';
    reel.style.backgroundPositionY = "0%";
  });

  const targetPosition = 100;

  reels.forEach((reel, index) => {
    let currentPosition = 0;

    const animationInterval = setInterval(() => {
      currentPosition += 10;
      reel.style.backgroundPositionY = '${currentPosition}%';

      if (currentPosition >= targetPosition) {
        clearInterval(animationInterval);
        reel.style.backgroundPositionY = "0%";
        checkWinCondition(reelValues)
      }
    }, 50);
  });
}

function checkWinCondition(reelValues) {
  const isWin = reelValues[0] === reelValues[1] && reelValues[1] === reelValues[2];

  if (isWin) {
    coins += 10;
    coinCount.innerText = 'Coins: ${coins}';
    alert("congratulations! You won 10 coins!");
  } else {
    audio.lose.play();
  }

  spinButton.disabled = false;
}

coinCount.innerText = 'Coins: ${coins}';

// set the Inital position of each reel

// Define the target position for the reels

// Animate each reel to the target position

// Define the function to check win condition

// Enable Spin button

// Initialize the coint count displau

// Add event listener to the spin button
spinButton.addEventListener("click", spin);