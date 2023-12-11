// ProcessStepModel.js

const mongoose = require('mongoose');

const processStepSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: [{}] },
});

const ProcessStep = mongoose.model('ProcessStep', processStepSchema);

module.exports = ProcessStep;
