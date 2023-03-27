const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const userRouter = require("./routes/user");
const userRoute = require("./routes/userRoute");
const loomRoute = require("./routes/loomRoute");
const requestForm = require("./routes/requestForm");
const suggestionRoute = require("./routes/suggestionRoute");
const dotenv = require("dotenv");
const ConnectDB = require("./db");
const errorHandler = require("./middleware/errorMiddleware");

// dotenv  config
dotenv.config();

ConnectDB();

const app = express();
const PORT = process.env.MY_PORT || 8000;

// ============  Middle Wares ==============
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.json());
// app.use(cors({}));

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:3000",
      "https://admin.nekaaramitra.com",
      "http://admin.nekaaramitra.com",
    ],
    credentials: true,
  })
);

// ============  routers ==============
app.use("/api/users", userRoute);
app.use("/api/looms", loomRoute);
app.use("/api/orders", requestForm);
app.use("/api/requests", suggestionRoute);

// app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h1>THis is from Server/index.js</h1>");
});

app.use(errorHandler);
// .listen(8081, (e) => e && console.log(e))

app.listen(PORT, () => {
  console.log(`Server is Started at PORT ${PORT}`);
});
