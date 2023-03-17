import User from '../models/users.js'
import bcrypt from 'bcrypt'
import { json } from 'express'
import {body} from 'express-validator'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'


const valid = [
    body('email').isEmail(),
    body('password').isLength({min: 8})
]

export const registration = async (req, res) => {
    try {
        const {email, password} = req.body 
        const _isUsed = await User.findOne({email})

        // if(validationResult(req)){
        //     if(_isUsed){
        //         res.json({
        //             message: "Данный пользователь уже зарегестрирован"
        //         })
        //     }
        //     return res.json({
        //         message: "Неверно указан логин или пароль"
        //     })
        // } else {
        //     if(_isUsed){
        //         res.json({
        //             message: "Данный пользователь уже зарегестрирован"
        //         })
        //     }
        // }

        if(_isUsed){
            res.json({
                message: "Данный пользователь уже зарегестрирован"
            })
        }

        

        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(password, salt)

        const _User = User({
            email,
            password:hash
        })

        const token = jwt.sign(
            {
                id: _User._id
            },
            process.env.JWT,
            {expiresIn: '31d'}
        )

        await _User.save()

        res.json({
            message: "Добро пожаловать!",
            _User,
            token
        })

    } catch (error) {
        res.json({
            message: error
        })
    }
}


export const login = async (req, res) => {
    try {

        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user){
            return res.json({
                message: "Данный пользователь не зарегестрирован"
            })
        }

        const _isPasswodCorrect = await bcrypt.compare(password, user.password)

        if(!_isPasswodCorrect){
            return res.json({
                message: "Неверный пароль"
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT,
            {expiresIn: '31d'}
        )

        return res.json({
            token, 
            user, 
            message:"С возвращением!"
        })

    } catch (error) {
        console.log(error)
        res.json({
            message: "Something bad",
            error: error
        })
    }
}


export const checkAuth = async(req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user){
            return res.status(400).json({
                message: "Пользователь не авторизован"
            })
        }

        const token = jwt.sign(
            {
                id: _User._id
            },
            process.env.JWT,
            {expiresIn: '31d'}
        )

        res.json({
            user,
            token
        })

    } catch (error) {
        res.json({
            message: "Пользователь не авторизован"
        })
    }
}