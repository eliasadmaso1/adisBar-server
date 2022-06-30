import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://eliasadmaso1:eliasad123@cluster0.zgbqg.mongodb.net/adisBar-data?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("you connected to database"))
  .catch((err) => console.log("err:", err));

const db = mongoose.connection;
export default db;
