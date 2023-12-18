import cors from "cors";
import { config } from "dotenv";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import { getClientURL } from "./utils/index.js";

config();

const app = express();

// SET UP MIDDLEWARES  ----------------------------------------------------------------
app.use(
  cors({
    origin: getClientURL(),
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(express.json());

// app.use(express.static("public"));

// ROUTES ---------------------------------------------------------------------------

app.use("/api/users", userRoutes);

app.all("*", function (req, res) {
  res.status(401).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

// GLOBAL MIDDLEWARE -------------------------------------------------------------------

// app.use(globalErrorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
