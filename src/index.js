const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json");
const path = require("path");

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

let pic = "../public/shield.png";
let bg = "../public/Group.png";

for (let i = 0; i < data.length; i++) {
  app.get(`/${i + 1}`, (req, res) => {
    const pageData = data[i];
    res.render("layout", { data: pageData });
  });
}

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
