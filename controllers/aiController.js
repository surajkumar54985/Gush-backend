// aiController.js

const chatGPT = require('../utils/chatGPT');

async function generateProcessSteps(description) {
  try {
    // Assuming chatGPT.generateSteps is a function that interacts with ChatGPT to generate steps
    const generatedSteps = await chatGPT.generateSteps(description);
    return generatedSteps;
  } catch (error) {
    console.error('Error generating process steps from AI:', error);
    throw error;
  }
}

module.exports = { generateProcessSteps };
