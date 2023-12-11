const { generateSteps } = require('./chatGPT');

exports.process = async (userInput) => {
  try {
    // Call the ChatGPT API to generate steps based on user input
    const generatedSteps = await generateSteps(userInput);

    // Return the processed steps
    return generatedSteps.map((step, index) => ({
      title: `AI Step ${index + 1}`,
      description: step,
      metadata: '',
    }));
  } catch (error) {
    console.error('Error processing input:', error);
    // Handle the error appropriately
    throw error;
  }
};


//   const axios = require('axios');

//   const apiKey = 'your-api-key';  // Replace with your OpenAI API key
  
//   const prompt = "Translate the following English text to French: '{}'";
//   const maxTokens = 150;
  
//     exports.generateChat = async (prompt) => {
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/engines/text-davinci-003/completions',
//         {
//           prompt: prompt,
//           max_tokens: maxTokens,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`,
//           },
//         }
//       );
  
//       const generatedText = response.data.choices[0].text.trim();
//       console.log(generatedText);
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//     }
//   }
  
// //   generateChat(prompt);
  