const mongoose = require("mongoose");
const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (error) => error);

connection.once("open", async () => {
  console.log("Connected to socialMediaDB - 💥 Dropping previous data 💥");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing reactions
  // await Reaction.deleteMany({});

  // Create the users
  await User.create(
    {
      username: "GabeLuvsAdidas",
      email: "tracksuitman@gmail.com",
    },
    {
      username: "DinnerSoon",
      email: "reallyneedsomefood@gmail.com",
    },
    {
      username: "Mankind",
      email: "threwunderatkeroffhellinacell@gmail.com",
    }
  );
});

process.exit();