import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();

const port = 5000;

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.verqpx7.mongodb.net/ticket-selling-platform`
    );
    console.log("database connection established");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`failed to connect to database`, error);
  }
}

main().catch((err) => console.log(err));
