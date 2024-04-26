const mongoose = require('mongoose');

// Replace 'your_database_name' with the actual name of your MongoDB database
const dbName = process.env.DB_NAME;

// Replace 'mongodb://localhost/' with your MongoDB server URI if it's hosted elsewhere
const dbURI = process.env.MONGO_CONNECTION_STRING;

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for Mongoose connection
db.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

db.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close Mongoose connection when Node process terminates
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed due to app termination');
    process.exit(0);
  });
});
