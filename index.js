import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

import database from './database/index.js';
import feedbackRouter from './router/feedback.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/feedbacks',feedbackRouter);

app.get("/",(req,res)=>{
    res.send("api running")
})

app.listen(PORT, () => {
    console.log(`app listen to port ${PORT}`);
  });