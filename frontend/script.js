// script.js

// Sample game data
const games = [
  {
    title: "Math Quiz",
    description: "Sharpen your math skills with fun challenges.",
    link: "#"
  },
  {
    title: "History Challenge",
    description: "Test your knowledge of world history.",
    link: "#"
  },
  {
    title: "Science Trivia",
    description: "Explore the wonders of science through quick quizzes.",
    link: "#"
  }
];

// Function to render games
function renderGames() {
  const gamesContainer = document.getElementById("games");
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.style.cssText = `
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      padding: 20px;
      margin: 10px;
      width: 250px;
      text-align: center;
    `;

    const title = document.createElement("h3");
    title.textContent = game.title;

    const desc = document.createElement("p");
    desc.textContent = game.description;

    const link = document.createElement("a");
    link.href = game.link;
    link.textContent = "Play Now";
    link.style.cssText = `
      display: inline-block;
      margin-top: 10px;
      padding: 8px 15px;
      background: #3498db;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;
    `;
    link.onmouseover = () => link.style.background = "#2980b9";
    link.onmouseout = () => link.style.background = "#3498db";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    gamesContainer.appendChild(card);
  });
}

// Event listener for Get Started button
document.getElementById("startBtn").addEventListener("click", () => {
  alert("Let's start learning and playing!");
});

// Render games on page load
renderGames();
