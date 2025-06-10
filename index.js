import dotenv from 'dotenv';
import express from "express";
import msgRoutes from "./routes/msgRoutes.js"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/messages", msgRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



// const token = process.env.SLACK_BOT_TOKEN;
// const channel = process.env.CHANNEL_ID;
// const slack = new WebClient(token);

