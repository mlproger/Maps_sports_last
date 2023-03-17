import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios.js'
//import { validationResult } from 'express-validator'
//import {validation} from '../../../../../server/controllers/auth.js'
const initialState = {
    places: [],
    loading: false,
}


export const gelAll = createAsyncThunk('places/checkAll', async() => {
    try {
        const { data } = await axios.get('places/all')
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getById = createAsyncThunk('places/getOne/:id', async() => {
    try {
        const {place} = await axios.get(`places/current/:id`)
        return place
    } catch (error) {
        
    }
})


export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {},
    extraReducers: { 
        [gelAll.pending] : (state) => {
            state.loading = true
        },
        [gelAll.fulfilled] : (state, action) => {
            state.places = action.payload.places
            state.loading = false
        },
        [gelAll.rejected] : (state) => {
            state.loading = false
        },


        // [getById.pending] : (state) => {
        //     state.loading = true
        // },
        // [getById.fulfilled] : (state, action) => {
        //     state.places = action.payload.places
        //     state.loading = false
        // },
        // [getById.rejected] : (state) => {
        //     state.loading = false
        // },

    }
})

export default placesSlice.reducer
