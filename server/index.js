import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routerAuth from './routes/auth.js'
import routerPlaces from './routes/places.js'
import routerReviews from './routes/review.js'
const app = express();
dotenv.config()
app.use(express.json());
app.use(cors());
app.use('/api/auth', routerAuth)
app.use('/api/places', routerPlaces)
app.use('/api/reviews', routerReviews)

const PORT = process.env.PORT || 3005
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@placesdb.tcqkd2h.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`),
        
        app.listen(PORT, (err) => {
            if(err){
                return console.log(err);
            }
            console.log("OK");
        });
    } catch (error) {
        console.log(error)
        console.log("BAD")
    }
}
start()


