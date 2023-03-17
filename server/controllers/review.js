import { json } from 'express'
import Review from '../models/review.js'

export const createReviews = async (req, res) => {
    try {
        const {raithing, text, author, id_places} = req.body
        //console.log(raithing,text,author, idN)
        const newReview = Review({
            raithing:raithing,
            text: text,
            author: author,
            id_paces: id_places
        })  
        console.log(newReview)
        await newReview.save()
        //console.log(newReview)
        res.json({
            message: "Спасибо за отзыв",
            newReview
        })
    } catch (error) {
        res.json({
            message: "Что-то пошло не так"
        })
        console.log(error)
    }
}

export const getReviews = async (req, res) => {
    try {
        const idN = req.params.id
        const reviews = await Review.find({"id_paces":idN})
        const len = reviews.length
        res.json({reviews, len})
    } catch (error) {
        console.log(error)
        res.json({
            message: "Что-то пошло не так"
        })
    }
}

export const getLenght = async (req, res) => {
    try {
        const idN = req.params.id
        const size = (await Review.find({"id_paces":idN})).length
        console.log(size)
        return res.json({size})
    } catch (error) {
        console.log(error)
        res.json({
            message: "Что-то пошло не так"
        })
    }
}