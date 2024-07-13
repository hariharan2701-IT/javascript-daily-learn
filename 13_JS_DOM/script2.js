// Function to change year color every second
function changeYearColor() {
  const yearElement = document.getElementById('year');
  setInterval(() => {
      yearElement.style.color = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
  }, 1000);
}

// Function to change date and time background color every second
function changeDateTimeBackgroundColor() {
  const dateTimeElement = document.getElementById('date-time');
  setInterval(() => {
      dateTimeElement.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
  }, 1000);
}

// Function to generate a random color value
function randomColorValue() {
  return Math.floor(Math.random() * 256);
}

// Function to display current date and time
function displayDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  setInterval(() => {
      const now = new Date();
      dateTimeElement.textContent = now.toLocaleString();
  }, 1000);
}

// Function to set the background colors for challenges
function setChallengeBackgrounds() {
  const completedChallenges = document.querySelectorAll('.completed');
  completedChallenges.forEach((challenge) => {
      challenge.style.backgroundColor = 'green';
  });

  const ongoingChallenges = document.querySelectorAll('.ongoing');
  ongoingChallenges.forEach((challenge) => {
      challenge.style.backgroundColor = 'yellow';
  });

  const comingChallenges = document.querySelectorAll('.coming');
  comingChallenges.forEach((challenge) => {
      challenge.style.backgroundColor = 'red';
  });
}

// Call functions to set up initial state and intervals
changeYearColor();
changeDateTimeBackgroundColor();
displayDateTime();
setChallengeBackgrounds();
