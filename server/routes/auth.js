import { Router } from "express";
import { registration, login, checkAuth} from "../controllers/auth.js";
import {check} from '../utils/check.js'
const router = new Router()

router.post('/registration', registration)

router.post('/login', login)

router.get('/check', check, checkAuth)

export default router