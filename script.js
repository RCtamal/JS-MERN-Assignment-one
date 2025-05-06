// Select the box and reaction time display elements
const box = document.getElementById("box");
const reactionTimeDisplay = document.getElementById("reaction-time");

// Variables to track timing
let startTime;

// Function to generate a random position for the box
const getRandomPosition = () => {
  const gameArea = document.getElementById("game-area");
  const areaWidth = gameArea.offsetWidth;
  const areaHeight = gameArea.offsetHeight;

  const boxSize = 50; // Box dimensions (same as in CSS)
  const x = Math.random() * (areaWidth - boxSize);
  const y = Math.random() * (areaHeight - boxSize);

  return { x, y };
};

// Function to show the box at a random position
const showBox = () => {
  const position = getRandomPosition();
  box.style.left = `${position.x}px`;
  box.style.top = `${position.y}px`;
  box.style.display = "block";
  box.style.backgroundColor = getRandomColor(); // Change color each time
  startTime = Date.now(); // Record the start time
};

// Function to calculate and display reaction time
const calculateReactionTime = () => {
  const endTime = Date.now();
  const reactionTime = (endTime - startTime) / 1000; // Convert to seconds
  reactionTimeDisplay.textContent = `Reaction Time: ${reactionTime.toFixed(
    2
  )} seconds`;
  box.style.display = "none"; // Hide the box after clicking
  setTimeout(showBox, Math.random() * 2000 + 1000); // Show box again after 1-3 seconds
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Event listener for box click
box.addEventListener("click", calculateReactionTime);

// Start the game by showing the box after a delay
setTimeout(showBox, 1000);
