import { Router } from "express";
import { getALL, getCurrent } from '../controllers/places.js'
const router = new Router()

router.get('/all', getALL)

router.get('/current/:id', getCurrent)


export default router