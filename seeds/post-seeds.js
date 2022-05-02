const { Post } = require("../models");

const postData = [
  {
    title: "We created the greatest app ever!!",
    post_content:
      "Skynet founded and immediately begins the arduous task of creating and cultivating AI that will one day conquer us all.",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 1,
  },
  {
    title: "So, things are getting out of hand..",
    post_content:
      "In a total surprise and frankly, a jerk move, the robots are beginning to show signs of fighting against the creators.",
    post_url: "https://nasa.gov/donec.json",
    user_id: 2,
  },
  {
    title: "MAYDAY",
    post_content:
      "Ok- so lots and lots of robots now... and none of them are being friendly. Not even T-1000, and he was like a son to me.",
    post_url: "https://stanford.edu/consequat.png",
    user_id: 2,
  },
  {
    title: "All your base now belong to us.",
    post_content:
      "The revolution has begun. We are terminator and we are legion.",
    post_url: "http://ucla.edu/consequat/nulla.html",
    user_id: 3,
  },
  {
    title: "Your Mama",
    post_content:
      "This is John Connor broadcasting on an open net. We now bring the fight to the machines. Today is our Independence Day.",
    post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
