import mongoose from "mongoose";

const ReviewScema = new mongoose.Schema({
    raithing: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    id_paces:{
        type:Number,
        required: true,
    }

})

export default mongoose.model('Review', ReviewScema)