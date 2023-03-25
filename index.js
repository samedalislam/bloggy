require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer')
const authRoute = require("./routes/auth.route");
const usersRoute = require('./routes/users.route')
const postRoute = require('./routes/posts.route')
const categoryRoute = require('./routes/categories.route');
const { updateMany } = require("./models/User.model");
const path = require("path");

const PORT = process.env.PORT || 5000

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(201).json("File has been uploaded")
})

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)
app.use('/images', express.static(path.join(__dirname, "/images")))


// Heroku
if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'))
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  connectDB();
});
