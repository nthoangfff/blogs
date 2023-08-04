
const mongoose = require('mongoose');

const connectToMongoDB = () => {
  // Replace the URI with your MongoDB connection string
  const uri = 'mongodb+srv://nthoang:Mystogan99@cluster0.d9rblaj.mongodb.net/'; 

  // Connect to MongoDB
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB', error);
    });
}

module.exports = connectToMongoDB;
// connection.js