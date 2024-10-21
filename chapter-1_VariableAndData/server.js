// External Module
const express = require("express");
const app = express();
// Local Module
const userRouter = require("./Routes/userRoutes");
const hostRouter = require("./Routes/hostRoutes");
const _404Router = require("./Routes/404");

// app.use(express.json());

app.use(express.urlencoded());
app.use("/", userRouter);
app.use("/", hostRouter);
app.use("/", _404Router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
