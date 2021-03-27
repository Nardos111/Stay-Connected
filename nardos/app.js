const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const Tesseract = require("tesseract.js");

//storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("avatar");
app.set("view engine", "ejs");
//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/uploads", (req, res) => {
  upload(req, res, (err) => {
    console.log(req.file);
    fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
      if (err) return console.log("This is your error ", err);
      Tesseract.recognize(data, "eng")
        .then(({ data: { text } }) => {
          const item = text;
          fs.writeFileSync("file.txt", item);
          console.log(item);
        })
        .then((result) => {
          res.redirect("/");
        });
    });
  });
});
app.use(express.static(__dirname + "/public"));
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`hey i'm running on port ${PORT}`));
