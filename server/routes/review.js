import { Router } from "express";
import { createReviews, getLenght, getReviews } from "../controllers/review.js";
import {check} from '../utils/check.js'
const router = new Router()

router.post('/:id', createReviews)

router.get('/:id', getReviews)

router.get('/lenght/:id', getLenght)

export default router 