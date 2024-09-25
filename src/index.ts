// Configs
import dotenv from "dotenv";
dotenv.config();

// Server
import express from "express";
const app = express();

import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    code: 200,
    message: "Ok",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
