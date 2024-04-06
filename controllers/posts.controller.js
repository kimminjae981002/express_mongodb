const path = require("path");

function getPost(req, res) {
  res.render("posts", {
    templateName: "post",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "IMG_5678.jpeg"));
}

module.exports = {
  getPost,
};
