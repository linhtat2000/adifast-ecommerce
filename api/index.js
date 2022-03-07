const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();

const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port:", port);
});
