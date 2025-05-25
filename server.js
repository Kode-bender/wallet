import express from "express";
import "dotenv/config";
import cors from 'cors'
import transactionRoute from "./routes/transactionRoute.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { initDB } from "./config/db.js";
import job from './config/cron.js'

const app = express();

if(process.env.NODE_ENV === "production") job.start
const port = process.env.PORT || 5001;

app.use(rateLimiter)
app.use(express.json())
app.use(cors())
app.use("/api/transactions", transactionRoute)

app.get("/api/health", (req, res) => {
  res.status(200).json({status: "ok"})
})

initDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
