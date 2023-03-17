import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        require: true,
        unique: true 
    },
    password: {
        type: String,
        require:true
    }
})

export default mongoose.model('User', UserSchema);