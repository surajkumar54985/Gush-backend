// processController.js

const ProcessStep = require('../models/ProcessStepModel');

async function saveProcessSteps(steps) {
  try {
    // Assuming steps is an array of step objects
    const savedSteps = await ProcessStep.insertMany(steps);
    return savedSteps;
  } catch (error) {
    console.error('Error saving process steps to MongoDB:', error);
    throw error;
  }
}

module.exports = { saveProcessSteps };
