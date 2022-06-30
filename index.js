import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express());

app.listen(PORT, () => {
    console.log(`app listen to port ${PORT}`);
  });