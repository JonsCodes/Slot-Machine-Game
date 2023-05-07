// Define the images for the slot machine
const images = [
  "assets/cherries.png",
  "assets/clover.png",
  "assets/lemon.png",
  "assets/melon.png",
  "assets/bell.png"
];

// Define the audio clips for the slot machine
const audio = {
  spin: new Audio("assets/audio/spin.wav"),
  win: new Audio("assets/audio/win.wav"),
  lose: new Audio("assets/audio/lose.wav")
};

// Set the initial number of coins
let coins = 100;

// Get the elements for the slot machine
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
  coinCount.innerText = `Coins: ${coins}`;

  // Generate random values for each reel
  const reelValues = [];
  for (let i = 0; i < reels.length; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    reelValues.push(randomImage);
  }

  // Animate reels
  animateReels(reelValues);
}

// Define the function to animate reels
function animateReels(reelValues) {
  let reelsFinished = 0; // keep track of how many reels have finished spinning

  reels.forEach((reel, index) => {
    const targetPosition = 100;
    let currentPosition = 0;
    const numSteps = 60; // number of animation steps
    const stepDuration = 50; // duration of each step in milliseconds
    const totalDuration = numSteps * stepDuration; // total duration of the animation

    const animationInterval = setInterval(() => {
      currentPosition += targetPosition / numSteps; // step size
      reel.style.backgroundPositionY = `${currentPosition}%`;

      if (currentPosition >= targetPosition) {
        clearInterval(animationInterval);
        reel.style.backgroundPositionY = "0%";
        reelsFinished++; // increment the count of finished reels

        if (reelsFinished === reels.length) {
          setTimeout(() => {
            checkWinCondition(reelValues);
          }, 1000); // Delay the display of results for 1 second
        }
      } else {
        // Generate random values for each step until the target position is reached
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        reel.style.backgroundImage = `url(${randomImage})`;
      }
    }, stepDuration);
  });
}

// Define the function to check win condition
function checkWinCondition(reelValues) {
  const isWin = reelValues[0] === reelValues[1] && reelValues[1] === reelValues[2];

  if (isWin) {
    coins += 10;
    coinCount.innerText = `Coins: ${coins}`;
    audio.win.play();
    alert("Congratulations! You won 10 coins!");
  } else {
    audio.lose.play();
    alert("You lose! Try again!");
  }

  // Enable spin button
  spinButton.disabled = false;
}

// Initialize the coin count display
coinCount.innerText = `Coins: ${coins}`;

// Add event listener to the spin button
spinButton.addEventListener("click", spin);