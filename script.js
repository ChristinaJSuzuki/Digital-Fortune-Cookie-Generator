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
