import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

// Get Api
app.get("/", (req: Request, res: Response) => {
  res.send(`Hello`);
});

// Get Api
app.get("/", (req: Request, res: Response) => {
  res.send(`Hello`);
});

// Get Api
app.get("/demo", (req: Request, res: Response) => {
  res.send(`Demo`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
