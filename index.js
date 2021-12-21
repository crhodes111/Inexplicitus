const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./api/routes/auth");
const userRoute = require("./api/routes/users");
const postRoute = require("./api/routes/posts");
const categoryRoute = require("./api/routes/categories");
const multer = require("multer");
const path = require("path");
app.use('/', express.static(path.join(__dirname, '/client/build')));
const port = process.env.PORT || 5000 // Heroku will need the PORT environment variable
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


  app.use(express.static(path.join(__dirname,'cleint', 'build')))
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })


app.listen(port, () => {
  console.log("Backend is running.");
});
