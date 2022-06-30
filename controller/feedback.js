import feedback from "../model/feedback.js";

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await feedback.find({});
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addFeedback = async (req, res) => {
  try {
    await feedback.insertMany(req.body, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
