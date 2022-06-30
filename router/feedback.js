import express from 'express';
import { addFeedback, getAllFeedbacks } from '../controller/feedback.js';

const Router = express.Router();

Router.get('/',getAllFeedbacks);
Router.post('/',addFeedback);

export default Router;
