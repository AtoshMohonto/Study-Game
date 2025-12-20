const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Demo API endpoint
app.get("/api/games", (req, res) => {
  res.json([
    { id: 1, name: "English Quiz", description: "Learn English with fun" },
    { id: 2, name: "Gita Knowledge", description: "Study Gita concepts interactively" }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
