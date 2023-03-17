import mongoose from "mongoose";


const PlaceSchema = new mongoose.Schema({
    id: {
        type:String
    },
    is_acive:{
        type:String
    },
    name:{
        type:String
    },
    mini_description: {
        type: String
    },
    full_description:{
        type: String
    },
    adress:{
        type:String
    },
    x_coord:{
        type:String
    },
    y_coord:{
        type:String
    },
    telephone:{
        type:String
    },
    email:{
        type:String
    },
    url:{
        type:String
    },
    type:{
        type:String
    },
    type_championate:{
        type:String
    },
    kind_sports:{
        type:String
    },

})

export default mongoose.model('Place', PlaceSchema);