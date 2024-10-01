const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios"); // Import axios
const bodyParser = require("body-parser");
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses incoming JSON requests

// Route for AI recipe generation using the Gemini API
app.post("/generate-content", async (req, res) => {
  const { contents } = req.body;

  // Ensure that API key is present
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key." });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      { contents }, // Send input text in request body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Send back the generated content
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating content." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
