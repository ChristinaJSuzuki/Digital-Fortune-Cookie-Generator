// Whole fortune cookie before the "crack"
const wholeCookie = `
        _______
      .'       '.
     /           \\
    |             |
     \\___________/
`;

// Fortune cookie split in half after "crack"
const splitCookie = `
      _______     _______
     /       \\   /       \\
    |         | |         |
     \\_______/   \\_______/
`;

// Fortune messages
const fortuneMessages = [
  "You are about to become $10 poorer.",
  "When in anger, sing the alphabet.",
  "The fortune you seek is in another cookie.",
  "Fail.",
  "Come back later... I am sleeping.",
  "It would be best to maintain a low profile for now.",
  "Error 404: Fortune not found.",
  "You will be hungry again in one hour.",
  "Fortune favors the brave.",
];

// Random fortune generator function
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Function to create a random fortune
function createFortune() {
  return fortuneMessages[generateRandomNumber(fortuneMessages.length)];
}

// Function to simulate the fortune cookie cracking
function crackFortuneCookie() {
  // Display the whole cookie first
  console.log("Here is your fortune cookie:");
  console.log(wholeCookie);

  // Simulate cracking the cookie open
  console.log("Cracking the cookie...");
  setTimeout(() => {
    // Display the split cookie
    console.log(splitCookie);

    // Display the fortune message
    let fortune = createFortune();
    console.log(`Your fortune: "${fortune}"`);
  }, 1000); // 1-second delay to simulate the cracking effect
}

// Call the function to "crack" the cookie
crackFortuneCookie();
