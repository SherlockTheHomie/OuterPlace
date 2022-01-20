const mongoose = require("mongoose");
const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (error) => error);

connection.once("open", async () => {
  console.log("Connected to OuterPlaceDB");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  let friend = await User.create([]);

  let reaction = [
    {
      body: "No way! Thats awesome!",
      username: "SharonLeBaron",
    },
    {
      body: "This is the best!",
      username: "CallMeCarl"
    },
    {
      body: "All of em!",
      username: "ElephantJones"
    },
    {
      body: "God Bless!",
      username: "SharonLeBaron"
    },
    {
      body: "Thoughts and Prars!",
      username: "SharonLeBaron"
    },
  ]

 

  // Drop existing reactions
  // await Reaction.deleteMany({});
  const thought = await Thought.insertMany([
    {
      thoughtText: "It do be like that sometimes",
      username: "TerranceTheMachine",
      reactions: [reaction[0]]
    },
    {
      thoughtText: "Is this real? at all?",
      username: "SharonLeBaron",
      reactions: [reaction[2]]
    },
    {
      thoughtText: "I do it for the memes",
      username: "TerranceTheMachine",
      reactions: [reaction[1]]
    },
    {
      thoughtText: "Don't go to Taco Bell on Sherman Ave",
      username: "ElephantJones",
      reactions: [reaction[3]]
    },
    {
      thoughtText: "How many apples did they fit in there? All of them",
      username: "SharonLeBaron",
      reactions: [reaction[4]]
    },
]);
  // Create the users
  const users = await User.create(
    {
      username: "TerranceTheMachine",
      email: "afterdarkmuffins@gmail.com",
      thoughts: [thought[0]],
      friends: [friend[1], friend[3], friend[2]]
    },
    {
      username: "SharonLeBaron",
      email: "EatLiveLaugh@gmail.com",
      thoughts: [thought[1]],
      friends: [friend[0]]
    },
    {
      username: "CallMeCarl",
      email: "threwunderatkeroffhellinacell@gmail.com",
      thoughts: [thought[3]],
      friends: [friend[4], friend[2]]
    },
    {
      username: "ElephantJones",
      email: "FunkyTrunk@hotmail.com",
      thoughts: [thought[2]],
      friends: [friend[0], friend[2], friend[1]]
    },
    {
      username: "ChristyYamagoochi",
      email: "figure8sandskates@gmail.com",
      thoughts: [thought[4]],
      friends: [friend[0]]
    },
  );

console.log(users);

friend = [
  User[0], User[1], User[2], User[3], User[4],
];

console.log(friend);

  process.exit();
});

