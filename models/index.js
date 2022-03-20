// import all Models
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// set associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { Comment, Post, User };
