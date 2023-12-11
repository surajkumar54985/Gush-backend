const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://suraj54985:Suraj8209@cluster0.3qu19.mongodb.net/mern?retryWrites=true&w=majority'; // replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
