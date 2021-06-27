const express = require("express");
const connectDB = require("./config/connectDB");
const postRoute = require("./routes/postuser");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

// const { CustomValidation } = require("express-validator/src/context-items");



const app = express();

app.use(express.json());
app.use(morgan("common"));


app.use("/images", express.static(path.join(__dirname, "public/images")));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/posts");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

connectDB();

// app.use("/user", user);

// app.use("/postuser", postuser);

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/postusers", postRoute);
app.use("/conversation", conversationRoute);
app.use("/message", messageRoute);




const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`the server is running at http://localhost:${port}`);
});
