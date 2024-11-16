const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

const complaintRoutes = require("./routes/complaints-route");
const studentRoutes = require("./routes/std-route");
const wardenRoutes = require("./routes/warden-route");
const userRoutes = require("./routes/user-route");
const adminRoutes = require("./routes/admin-route");
const emailRoutes = require("./routes/send-email-route");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/', complaintRoutes);
app.use('/', studentRoutes);
app.use('/', wardenRoutes);
app.use('/', userRoutes);
app.use('/', adminRoutes);
app.use('/', emailRoutes);

app.listen(3000, () => {
  console.log("Application is running on port 3000");
});