const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoURL = process.env.DB_URL;
// "mongodb+srv://demodbJuzmeal:demodbJuzmeal@cluster0.riqbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true });
const con = mongoose.connection;
const RegisterLogin = require("./routers/Register&loginroute");
const otp = require("./routers/otp");
const enquiry = require("./routers/enquiry");
const payment = require("./routers/razorpay");
const calender = require("./routers/calender");
const address = require("./routers/Address");

const cors = require("cors");
PORT = process.env.PORT || 4000;

con.on("open", () => console.log("db connected"));
// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors({ origin: "http://juzmeal.com" }));
app.use(cors());
app.use(express.json());
app.use("/userdata", RegisterLogin);
app.use("/otp", otp);
app.use("/payment", payment);
app.use("/enquiry", enquiry);
app.use("/calender", calender);
app.use("/address", address);
app.use(cookieParser());
app.listen(PORT, () => {
	console.log("server started");
});
