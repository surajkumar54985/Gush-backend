const axios = require('axios');

const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: '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',
});

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
// main();

async function generateSteps(description) {
  const apiKey = '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';  // Replace with your ChatGPT API key
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  try {
    main();
    const response = await axios.post(
      apiUrl,
      {
        prompt: description,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    // Extract and return the generated steps
    const generatedText = response.data.choices[0].text.trim();
    const steps = generatedText.split('\n').map((step) => step.trim()).filter(Boolean);
    
    return steps;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = { generateSteps };

