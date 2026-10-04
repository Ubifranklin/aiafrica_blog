import "dotenv/config";
import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";


const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());
const port = process.env.PORT || 4000;

// Simple logger so you can see every request in the terminal
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to the next middleware or route
});

// Routes
app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/posts", postRoutes);

// 404 handler: runs when no route matched
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler: Express knows it's an error handler because it has 4 arguments
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
});









app.listen(port, () => {
  console.log(`Server API is running on port ${port}`);
});