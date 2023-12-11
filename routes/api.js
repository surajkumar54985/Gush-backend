// api.js

const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const processController = require('../controllers/processController');
const { connectToDatabase } = require('../utils/db');

router.use(express.json());

router.post('/api/generateProcessSteps', async (req, res) => {
  const { description } = req.body;
  try {
    const generatedSteps = await aiController.generateProcessSteps(description);
    res.json({ success: true, steps: generatedSteps });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/api/saveProcessSteps', async (req, res) => {
  const { steps } = req.body;
  const step = {title : steps.datas,description: steps.inputs};
  try {
    // const db = await connectToDatabase();
    console.log(typeof(step.description));
    console.log(step);
    const savedSteps = await processController.saveProcessSteps(step);
    // console.log(typeof(steps));
    // console.log(steps);
    res.json({ success: true, savedSteps });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
