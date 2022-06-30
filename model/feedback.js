import mongoose from 'mongoose';

const feedback = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{ timestamps: true }
);

export default mongoose.model("feedback", feedback);
