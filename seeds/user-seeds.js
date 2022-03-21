const { User } = require("../models");

const userData = [
  {
    username: "joshlyons",
    email: "joshlyons@email.com",
    password: "p@$$word1!",
  },
  {
    username: "terminator",
    email: "kittensarelove@email.com",
    password: "default",
  },
  {
    username: "johnconnor",
    email: "diemachines@email.com",
    password: "SkynetSuxx",
  },
  {
    username: "ProudMama",
    email: "sarahconnor@aol.com",
    password: "1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
