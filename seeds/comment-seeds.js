const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Rad rad rad",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I love this project",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Nah, this kinda sucks",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "But we worked so hard!",
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: "No one likes you anyway, Gretchen",
    user_id: 4,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
