const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const complaintRoutes = require("./routes/complaints-route");
const studentRoutes = require("./routes/std-route");
const wardenRoutes = require("./routes/warden-route");
const userRoutes = require("./routes/user-route");
const adminRoutes = require("./routes/admin-route");

mongoose.connect("mongodb://localhost:27017/complaintsDB", {
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

app.listen(3000, () => {
  console.log("Application is running on port 3000");
});