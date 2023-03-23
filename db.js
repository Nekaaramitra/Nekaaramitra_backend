const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = ConnectDB;

// mongoose.connect('mongodb+srv://Manic:153291Manic@cluster0.akzo3gs.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
