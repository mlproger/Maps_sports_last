import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios.js'
//import { validationResult } from 'express-validator'
//import {validation} from '../../../../../server/controllers/auth.js'
const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false,
}


export const registerUser = createAsyncThunk('auth/registerUser', async({email, password}) => {
    try {
        const { data } = await axios.post('auth/registration', {email, password})
        if(data.token){
            window.localStorage.setItem('token', data.token)
        }
        return data 
    } catch (error) {
        console.log(error)
    }
})


export const loginUser = createAsyncThunk('auth/loginUser', async({email, password}) => {
    try {
        const { data } = await axios.post('auth/login', {email, password})
        if(data.token){
            window.localStorage.setItem('token', data.token)
        }
        return data 
    } catch (error) {
        console.log(error)
    }
})

export const checkAuth = createAsyncThunk('auth/checkUser', async() => {
    try {
        const { data } = await axios.get('auth/check')
        return data 
    } catch (error) {
        console.log(error)
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.status = null
            state.isLoading = false
        }
    },
    extraReducers: { 
        [registerUser.pending] : (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled] : (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected] : (state,action) => {
            state.action = action.payload.message
            state.isLoading = true
        },

        [loginUser.pending] : (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled] : (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected] : (state,action) => {
            state.action = action.payload.message
            state.isLoading = false
        },

        [checkAuth.pending] : (state) => {
            state.isLoading = true
            state.status = null
        },
        [checkAuth.fulfilled] : (state, action) => {
            state.isLoading = false
            state.status = null
            state.user = action.payload?.user
            state.token = action.payload?.token
        },
        [checkAuth.rejected] : (state,action) => {
            state.action = action.payload.message
            state.isLoading = false
        },
    }
})

export const checkIsAuth = state => Boolean(state.auth.token)
export const { logout } = authSlice.actions
export default authSlice.reducer